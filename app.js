document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')


    let currentPlayer = 1

    // looping over all squares
    for (let i = 0, len = squares.length; i < len; i++) {
            //add an onclick to each square in the grid
            squares[i].onclick = () => {
                // if the square below the current square is taken, we can go on top of it
                if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {

                    if (currentPlayer === 1) {
                        squares[i].classList.add('taken')
                        squares[i].classList.add('player-one')

                        // change the player
                        currentPlayer = 2
                        displayCurrentPlayer.innerHTML = currentPlayer
                    } else {
                        squares[i].classList.add('taken')
                        squares[i].classList.add('player-two')

                        // change the player
                        currentPlayer = 1
                        displayCurrentPlayer.innerHTML = currentPlayer
                    }
                } else alert('cannot add a coin there !')    // if the square below the current square selected is not taken, an alert is thrown
            }

    }



        const winningArrays = [ // contains all the winning arrays
            [0, 1, 2, 3],
            [41, 40, 39, 38],
            [7, 8, 9, 10],
            [34, 33, 32, 31],
            [14, 15, 16, 17],
            [27, 26, 25, 24],
            [21, 22, 23, 24],
            [20, 19, 18, 17],
            [28, 29, 30, 31],
            [13, 12, 11, 10],
            [35, 36, 37, 38],
            [6, 5, 4, 3],
            [0, 7, 14, 21],
            [41, 34, 27, 20],
            [1, 8, 15, 22],
            [40, 33, 26, 19],
            [2, 9, 16, 23],
            [39, 32, 25, 18],
            [3, 10, 17, 24],
            [38, 31, 24, 17],
            [4, 11, 18, 25],
            [37, 30, 23, 16],
            [5, 12, 19, 26],
            [36, 29, 22, 15],
            [6, 13, 20, 27],
            [35, 28, 21, 14],
            [0, 8, 16, 24],
            [41, 33, 25, 17],
            [7, 15, 23, 31],
            [34, 26, 18, 10],
            [14, 22, 30, 38],
            [27, 19, 11, 3],
            [35, 29, 23, 17],
            [6, 12, 18, 24],
            [28, 22, 16, 10],
            [13, 19, 25, 31],
            [21, 15, 9, 3],
            [20, 26, 32, 38],
            [36, 30, 24, 18],
            [5, 11, 17, 23],
            [37, 31, 25, 19],
            [4, 10, 16, 22],
            [2, 10, 18, 26],
            [39, 31, 23, 15],
            [1, 9, 17, 25],
            [40, 32, 24, 16],
            [9, 17, 25, 33],
            [8, 16, 24, 32],
            [11, 17, 23, 29],
            [12, 18, 24, 30],
            [1, 2, 3, 4],
            [5, 4, 3, 2],
            [8, 9, 10, 11],
            [12, 11, 10, 9],
            [15, 16, 17, 18],
            [19, 18, 17, 16],
            [22, 23, 24, 25],
            [26, 25, 24, 23],
            [29, 30, 31, 32],
            [33, 32, 31, 30],
            [36, 37, 38, 39],
            [40, 39, 38, 37],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 16, 23, 30],
            [10, 17, 24, 31],
            [11, 18, 25, 32],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
        ]

        /**
         * checks the oard for a win
         */
        function checkBoard() {

            // for each winning combination look if all indexes are taken by player 1 or player 2
            for (let y = 0; y < winningArrays.length; y++) {
                const square1 = squares[winningArrays[y][0]]
                const square2 = squares[winningArrays[y][1]]
                const square3 = squares[winningArrays[y][2]]
                const square4 = squares[winningArrays[y][3]]


                players = ['player-one', 'player-two']
                players.forEach(p => {
                    if (square1.classList.contains(p) &&
                        square2.classList.contains(p) &&
                        square3.classList.contains(p) &&
                        square4.classList.contains(p)) {

                        square1.classList.add('wins')
                        square2.classList.add('wins')
                        square3.classList.add('wins')
                        square4.classList.add('wins')
                        result.innerHTML = p + ' Wins !!!'
                    }
                })

                // players.forEach(p => {
                //     if (squares[0].classList.contains(p) &&
                //         squares[1].classList.contains(p) &&
                //         squares[2].classList.contains(p) &&
                //         squares[3].classList.contains(p)) {
                //
                //         squares.forEach(s => s.classList.add('wins'))
                //         result.innerHTML = p + ' Wins !!!'
                //     }
                // })

            }
        }

        // event listener on each square -> trigger the function on click
        squares.forEach(square => square.addEventListener('click' , checkBoard))



})