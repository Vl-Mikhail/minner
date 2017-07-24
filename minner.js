const field = [
    ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'X', 'O', 'X', 'X'],
    ['X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O', 'X', 'X', 'X'],
    ['O', 'O', 'X', 'X', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X', 'X', 'O', 'X', 'O'],
    ['O', 'O', 'O', 'X', 'O', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'],
];

const di = [0, 0, 1, -1, 1, -1, 1, -1];
const dj = [1, -1, 0, 0, 1, -1, -1, 1];

class Minner {

    solution (field) {
        let n = field.length;
        let m = field[0].length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (field[i][j] === 'O') {
                    let answer = 0;

                    for (let d = 0; d < di.length; d++) {
                        let newI = i + di[d];
                        let newJ = j + dj[d];
                        if (newI >= 0 && newI < n && newJ >= 0 && newJ < m && field[newI][newJ] === 'X') {
                            answer++;
                        }
                    }

                    field[i][j] = answer;
                }
            }
        }

        return field;
    }

}

const minner = new Minner().solution(field);
console.log(minner);