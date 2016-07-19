var svgUtil = {}

// based http://phrogz.net/convert-svg-path-to-all-absolute-commands
svgUtil.convertToAbsolute = function ( pathElm ) {

  var clonedPathElm = pathElm.cloneNode( true ),
      i, l,
      x0, y0, x1, y1, x2, y2, x, y,
      segs = clonedPathElm.pathSegList;

  for ( i = 0, l = segs.numberOfItems; i < l; ++ i ) {

    var seg = segs.getItem( i ), command = seg.pathSegTypeAsLetter;

    if ( /[MLHVCSQTA]/.test( command ) ) {

      if ( 'x' in seg ) { x = seg.x };
      if ( 'y' in seg ) { y = seg.y };

    } else {

      if ( 'x1' in seg ) { x1 =  x + seg.x1 };
      if ( 'x2' in seg ) { x2 =  x + seg.x2 };
      if ( 'y1' in seg ) { y1 =  y + seg.y1 };
      if ( 'y2' in seg ) { y2 =  y + seg.y2 };
      if ( 'x'  in seg ) { x  += seg.x };
      if ( 'y'  in seg ) { y  += seg.y };

      switch ( command ) {

        case 'm':
          segs.replaceItem( clonedPathElm.createSVGPathSegMovetoAbs( x, y ), i );
          break;
        case 'l':
          segs.replaceItem( clonedPathElm.createSVGPathSegLinetoAbs( x, y ), i );
          break;
        case 'h':
          segs.replaceItem( clonedPathElm.createSVGPathSegLinetoHorizontalAbs( x ), i );
          break;
        case 'v':
          segs.replaceItem( clonedPathElm.createSVGPathSegLinetoVerticalAbs( y ), i );
          break;
        case 'c':
          segs.replaceItem( clonedPathElm.createSVGPathSegCurvetoCubicAbs( x, y, x1, y1, x2, y2 ), i );
          break;
        case 's':
          segs.replaceItem( clonedPathElm.createSVGPathSegCurvetoCubicSmoothAbs( x, y, x2, y2 ), i );
          break;
        case 'q':
          segs.replaceItem( clonedPathElm.createSVGPathSegCurvetoQuadraticAbs( x, y, x1, y1 ), i );
          break;
        case 't':
          segs.replaceItem( clonedPathElm.createSVGPathSegCurvetoQuadraticSmoothAbs( x, y ), i );
          break;
        case 'a':
          segs.replaceItem( clonedPathElm.createSVGPathSegArcAbs( x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag ),i );
          break;
        case 'z':
        case 'Z':
          x = x0;
          y = y0;
          break;

      }

    }

    if ( command == 'M' || command == 'm' ) {

      x0 = x,
      y0 = y;

    }

  }

  return clonedPathElm;
  
};




// based https://gist.github.com/YannickBochatay/1297684
svgUtil.convertToCurve = function ( pathElm ) {

  var clonedPathElm = svgUtil.convertToAbsolute( pathElm.cloneNode( true ) ),
      seg, letter, currentPoint,
      list = clonedPathElm.pathSegList,
      method, newseg, newsegs = [],
      x, y, m,
      i, l,
      _13 = 1/3,
      _23 = 2/3;

  var getCurrentPoint = function( i ) {

    var j = i,
    x = false,
    y = false,
    prev;

    while ( x === false || y === false ) {

      j --;

      if ( j < 0 ) {

        if ( x === false ) { x = 0; }
        if ( y === false ) { y = 0; }

      } else {

        prev = list.getItem( j );
        if ( prev.x!==undefined && x === false ) { x = prev.x; }
        if ( prev.y!==undefined && y === false ) { y = prev.y; }

      }

    }

    return { x: x, y: y };

  };

  for ( i = 0, l = list.numberOfItems; i < l; i ++ ) {
      
      seg = list.getItem( i );
      command = seg.pathSegTypeAsLetter;
      currentPoint = getCurrentPoint( i );

      switch ( command ) {

        case 'M':
          newseg = pathElm.createSVGPathSegMovetoAbs( seg.x, seg.y );
          newsegs.push( newseg );
          m = { x: seg.x, y: seg.y };
          break;

        case 'Z':
          newseg = pathElm.createSVGPathSegCurvetoCubicAbs(
            m.x, m.y,
            m.x, m.y,
            m.x, m.y
          );
          newsegs.push( newseg );
          break;

        case 'L':
          newseg = pathElm.createSVGPathSegCurvetoCubicAbs(
            seg.x, seg.y,
            seg.x, seg.y,
            seg.x, seg.y
          );
          newsegs.push( newseg );
          break;

        case 'H':
          newseg = pathElm.createSVGPathSegCurvetoCubicAbs(
            seg.x, currentPoint.y,
            seg.x, currentPoint.y,
            seg.x, currentPoint.y
          );
          newsegs.push( newseg );
          break;

        case 'V':

          newseg = pathElm.createSVGPathSegCurvetoCubicAbs(
            currentPoint.x, seg.y,
            currentPoint.x, seg.y,
            currentPoint.x, seg.y
          );
          newsegs.push( newseg );
          break;

        case 'C':

          newseg = pathElm.createSVGPathSegCurvetoCubicAbs( seg.x, seg.y, seg.x1, seg.y1, seg.x2, seg.y2 );
          newsegs.push( newseg );
          break;

        case 'S': //transform S to C

          if ( i === 0 || list.getItem( i - 1 ).pathSegTypeAsLetter !== 'C' ) {

            x = currentPoint.x;
            y = currentPoint.y;

          } else {

            x = currentPoint.x * 2 - list.getItem( i - 1 ).x2;
            y = currentPoint.y * 2 - list.getItem( i - 1 ).y2;

          }

          newseg = pathElm.createSVGPathSegCurvetoCubicAbs( seg.x, seg.y, x, y, seg.x2, seg.y2 );
          newsegs.push( newseg );
          break;

        case 'Q':
          newseg = pathElm.createSVGPathSegCurvetoCubicAbs(
            seg.x,
            seg.y,
            _13 * currentPoint.x + _23 * seg.x1,
            _13 * currentPoint.y + _23 * seg.y1,
            _13 * seg.x          + _23 * seg.x1,
            _13 * seg.y          + _23 * seg.y1
          );
          newsegs.push( newseg );
          break;

        case 'T': //transform T to Q

          if (i === 0 || list.getItem( i - 1 ).pathSegTypeAsLetter !== 'Q' ) {

            x = currentPoint.x;
            y = currentPoint.y;

          } else {

            x = currentPoint.x * 2 - list.getItem( i - 1 ).x1;
            y = currentPoint.y * 2 - list.getItem( i - 1 ).y1;

          }

          newseg = pathElm.createSVGPathSegCurvetoQuadraticAbs( seg.x, seg.y, x, y, seg.x2, seg.y2 );
          list.replaceItem( newseg , i );
          i--;
          continue;
          break;

        // case 'A':
        //   since 'A' is too complicated, there is nothing this time
        //   break;

    }

  }

  list.clear();

  for ( i = 0, l = newsegs.length; i < l; i ++ ) {

    list.appendItem( newsegs[ i ] );

  };

  return clonedPathElm;

};



svgUtil.getAnimTargetPaths = function ( pathElm1, pathElm2 ) {

  var clonedPathElm1 = svgUtil.convertToAbsolute( pathElm1.cloneNode( true ) ),
      clonedPathElm2 = svgUtil.convertToAbsolute( pathElm2.cloneNode( true ) ),
      segs1 = clonedPathElm1.pathSegList,
      segs2 = clonedPathElm2.pathSegList,
      gapOfSegs = Math.abs( segs1.numberOfItems - segs2.numberOfItems ),
      lessSegs,
      lastSeg,
      newseg,
      i;

  if ( segs1.numberOfItems > segs2.numberOfItems ) {

    lessSegs = segs2;

  } else if ( segs1.numberOfItems < segs2.numberOfItems ) {

    lessSegs = segs1;

  }

  if ( gapOfSegs !== 0 ) {

    lastSeg = lessSegs.getItem( lessSegs.numberOfItems - 1 );

    for ( i = 0; i < gapOfSegs; i ++ ) {

      newseg = clonedPathElm1.createSVGPathSegCurvetoCubicAbs(
        lastSeg.x,
        lastSeg.y,
        lastSeg.x1,
        lastSeg.y1,
        lastSeg.x2,
        lastSeg.y2
      );
      lessSegs.appendItem( newseg );

    }

  }

  return {
    from: clonedPathElm1,
    to:   clonedPathElm2
  };

}



svgUtil.animPath = function ( $target, $from, $to, duration ) {

  var numberOfSegs = $from.pathSegList.numberOfItems,
      seg1, seg2,
      fromSegs = [],
      toSegs = [],
      i,
      startTime = Date.now(),
      elapsdTime = 0;
  // $target.


  var process = function ( segData1, segData2, progress ) {

    var segs = $target.pathSegList,
        i,
        gap = {},
        newseg;

    segs.clear();

    for ( i = 0; i < numberOfSegs; i ++ ) {

      if ( segData1[ i ][ 0 ] === 'M' ) {

        gap.x = ( segData1[ i ][ 1 ] - segData2[ i ][ 1 ] ) * progress;
        gap.y = ( segData1[ i ][ 2 ] - segData2[ i ][ 2 ] ) * progress;

        newseg = $target.createSVGPathSegMovetoAbs(
          Math.floor( segData1[ i ][ 1 ] - gap.x ),
          Math.floor( segData1[ i ][ 2 ] - gap.y )
        );
        segs.appendItem( newseg );

      } else if ( segData1[ i ][ 0 ] === 'C' ) {

        gap.x  = ( segData1[ i ][ 1 ] - segData2[ i ][ 1 ] ) * progress;
        gap.y  = ( segData1[ i ][ 2 ] - segData2[ i ][ 2 ] ) * progress;
        gap.x1 = ( segData1[ i ][ 3 ] - segData2[ i ][ 3 ] ) * progress;
        gap.y1 = ( segData1[ i ][ 4 ] - segData2[ i ][ 4 ] ) * progress;
        gap.x2 = ( segData1[ i ][ 5 ] - segData2[ i ][ 5 ] ) * progress;
        gap.y2 = ( segData1[ i ][ 6 ] - segData2[ i ][ 6 ] ) * progress;

        newseg = $target.createSVGPathSegCurvetoCubicAbs(
          Math.floor( segData1[ i ][ 1 ] - gap.x ),
          Math.floor( segData1[ i ][ 2 ] - gap.y ),
          Math.floor( segData1[ i ][ 3 ] - gap.x1 ),
          Math.floor( segData1[ i ][ 4 ] - gap.y1 ),
          Math.floor( segData1[ i ][ 5 ] - gap.x2 ),
          Math.floor( segData1[ i ][ 6 ] - gap.y2 )
        );
        segs.appendItem( newseg );

      }

    }

    var segs;
    return segs;
  };

  for ( i = 0; i < numberOfSegs; i ++ ) {

    seg1 = $from.pathSegList.getItem( i );
    seg2 = $to.pathSegList.getItem( i );

    if ( seg1.pathSegTypeAsLetter === 'M' ) {

      fromSegs[ i ] = [ 'M', seg1.x, seg1.y ];

    } else {

      fromSegs[ i ] = [ 'C', seg1.x, seg1.y, seg1.x1, seg1.y1, seg1.x2, seg1.y2 ];

    }

    if ( seg2.pathSegTypeAsLetter === 'M' ) {

      toSegs[ i ] = [ 'M', seg2.x, seg2.y ];

    } else {

      toSegs[ i ] = [ 'C', seg2.x, seg2.y, seg2.x1, seg2.y1, seg2.x2, seg2.y2 ];
    }

  }

  ;( function anim () {

    var elapsdTime = Date.now() - startTime;
        progress = elapsdTime / duration;

    if ( progress >= 1 ) {
      process( fromSegs, toSegs, 1 );
      return;
    }

    requestAnimationFrame( anim );
    process( fromSegs, toSegs, progress );

  } )();

}

