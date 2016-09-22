/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //create a board that is nxn
  // startX = startX || 0; 
  // startY = startY || 0;
  // var board = new Board({n: n});
  // var rows = board.rows();
  // var results = [];
  // //iterate over first row in the board
  // for (var i = startX; i < n; i++) {
  //   //iterate over array i's indexes
  //   for (var j = startY; j < n; j++) {
  //     //set current location to 1
  //     board.togglePiece(i, j);
  //     //check row/col conflict if none then set that index = 1
  //     if (board.hasRowConflictAt(i) || board.hasColConflictAt(j)) {
  //       //then set index to 0
  //       board.togglePiece(i, j);
  //     } 
  //   }
  //   results.push(rows[i]);
  // }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(results));
  // return results;




  var results = [];
  var createRow = function (board, row) {
    board = board || new Board({n: n});
    row = row || 0;
    var innerResults = [];
    for (var i = 0; i < n; i++) {
      if (row === n) {
        results.push(innerResults);
      }

      //var temp = board.rows()[row][i];
      //if (board.rows()[row]) {
        console.log('row', board.rows()[row])
        board.rows()[row][i] = 1; //.togglePiece();
        if (board.hasRowConflictAt(row) || board.hasColConflictAt(i)) {
          board.rows()[row][i] = 0;//.togglePiece();
        } 
      //}
      console.log(board);
      createRow(board, row + 1);
    }
  };
  createRow(new Board({n: n}), 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(results));
  return results;

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //create counter variable
  // var counter = 0;
  // //call findNRooksSolution on the first location
  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     if (findNRooksSolution(n, i, j)) {
  //       counter++;
  //     //console.log(findNRooksSolution(n, i, j));
  //     }
  //   }
  // }
  //   //for each valid board, add one to the counter

  //call findNRooksSolution on each location on the board after that

  console.log('Number of solutions for ' + n + ' rooks:', counter);
  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //create a board that is nxn
  var board = new Board({n: n});
  var rows = board.rows();
  var results = [];
  //iterate over first row in the board
  for (var i = 0; i < rows.length; i++) {
    //iterate over array i's indexes
    for (var j = 0; j < rows[i].length; j++) {
      //set current location to 1
      board.togglePiece(i, j);
      var majorIndex = board._getFirstRowColumnIndexForMajorDiagonalOn(i, j);
      var minorIndex = board._getFirstRowColumnIndexForMinorDiagonalOn(i, j);
      //check row/col conflict if none then set that index = 1
      if (board.hasRowConflictAt(i) || board.hasColConflictAt(j) || board.hasMajorDiagonalConflictAt(majorIndex) || board.hasMinorDiagonalConflictAt(minorIndex)) {
        //then set index to 0
        board.togglePiece(i, j);
      } 
    }
    results.push(rows[i]);
  }
  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  return results;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
