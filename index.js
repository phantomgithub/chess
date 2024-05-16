import {pieces} from './piece.js';
class Square
    {
        constructor(color,index_id,piece)
        {
            this.color=color;
            this.index_id=index_id;
            this.piece=piece;
        }
         set_piece(piece)
        {
            this.piece=piece;

        }
        render()
        {
            let div=document.createElement('div');
            div.setAttribute("class","square");
            div.setAttribute("id",this.index_id);
            div.style.backgroundColor=this.color;

            if(this.piece)
            {
            
                div.appendChild(this.piece);
            }
        return div;
        }
    }

    class Board
        {
            constructor()
            {
                this.squares=[];
            }
            render()
            {
                const board=document.createElement('div');
                board.id="board";
                this.squares.forEach(square=>{
                    
                    
                    board.appendChild(square.render());
                }

                )
                return board;
            }
        }
        const board = new Board();
 
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if((i+j)%2==0)
            {
            let square=new Square("yellow",`${i*10+j}`,"");
            board.squares.push(square);
            }
            else
            {
                let square=new Square("brown",`${i*10+j}`,"");
                board.squares.push(square);
            }
        }
    }
board.squares[0].piece=pieces.Wpawn;
const boardElement = board.render();

document.body.appendChild(boardElement);
