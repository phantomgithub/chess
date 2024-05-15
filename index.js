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
                let pieceImg=document.createElement('img');
                pieceImg.setAttribute('src',this.piece);
                div.appendChild(pieceImg);
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
 
board.squares.push(new Square('yellow', 'a1', 'path_to_piece_image'));

const boardElement = board.render();
document.body.appendChild(boardElement);