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
  var board = new Board({n: n});
  var rows = board.rows();
  var results = [];
  //iterate over first row in the board
  for (var i = 0; i < rows.length; i++) {
    //iterate over array i's indexes
    for (var j = 0; j < rows[i].length; j++) {
      //set current location to 1
      board.togglePiece(i, j);
      //check row/col conflict if none then set that index = 1
      if (board.hasRowConflictAt(i) || board.hasColConflictAt(j)) {
        //then set index to 0
        board.togglePiece(i, j);
      } 
    }
    results.push(rows[i]);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return results;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
