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
  var results = [];
  var createRow = function (board, rowCount) {
    board = board || new Board({n: n});
    rowCount = rowCount || 0;
    for (var i = 0; i < n; i++) {
      if (rowCount === n) {
        results.push(board.rows());
        return;
      }

      board.rows()[rowCount][i] = 1; 
      if (board.hasRowConflictAt(rowCount) || board.hasColConflictAt(i)) {
        board.rows()[rowCount][i] = 0;
      } 
    }
    createRow(board, rowCount + 1);
  };
  createRow(new Board({n: n}), 0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(results));
  return results[0];

};

// return the number of nxn chessboards that exist, with n rooks placed such that no[1]]ne of them can attack each other
window.countNRooksSolutions = function(n) {
  var results = [];
  var board = new Board ({n: n});
  var nCount = 0;
  var createRow = function (rowCount) {
    //board = board || new Board({n: n});
    //rowCount = rowCount || 0;
      if (rowCount === n) {
        //if (!board.hasAnyRooksConflicts()) {
        nCount++;
        results.push(board.rows());
        //}
        return;
      }
    for (var i = 0; i < n; i++) {

      board.togglePiece(rowCount, i); 
      if (!board.hasAnyRooksConflicts()) {
        createRow(rowCount + 1);
      } 
      board.togglePiece(rowCount, i);
    }
  };
  createRow(0);
  console.log('results', results.length);
  console.log('Number of solutions for ' + n + ' rooks:', nCount);
  return nCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var results = [];
  var board = new Board ({n: n});
  var nCount = 0;
  var createRow = function (rowCount) {
    //board = board || new Board({n: n});
    //rowCount = rowCount || 0;
      if (rowCount === n) {
        //if (!board.hasAnyRooksConflicts()) {
        nCount++;
        results.push(board.rows());
        //}
        return;
      }
    for (var i = 0; i < n; i++) {

      board.togglePiece(rowCount, i); 
      if (!board.hasAnyQueensConflicts()) {
        createRow(rowCount + 1);
      } 
      board.togglePiece(rowCount, i);
    }
  };
  createRow(0);
  console.log('results', results.length);
  console.log('Number of solutions for ' + n + ' queens:', nCount);
  return nCount;
};
