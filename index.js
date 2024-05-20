let pawnsArray= [];
let body = document.getElementsByTagName('body')[0];
let boardContainer = document.getElementById('board');



function createPiece(team,piece)
{
    let p = document.createElement('div');
    p.setAttribute('piece',piece);
    p.setAttribute('team',team);
    p.classList.add(team+'-'+piece);
    return p;
}
//createBoard function start
function createBoard()
{
for(let i = 1;i<=8;i++)
    {
        for(let j = 1;j<=8;j++)
            {
                let square = document.createElement('div');
                square.className = "square";
                if((i+j)%2==0)
                    square.style.backgroundColor='rgb(235,235,211)';
                else
                    square.style.backgroundColor = 'rgb(116,147,91)';

                square.id = i*10+j;
                // square.onclick = squareClicked(square.id);
                 
                 boardContainer.appendChild(square);  

            }
            
    }

}
//createBoard function end

//function to setBoard starts
function setBoard()
{
let fen='rnbqkbnr/pppppppp/////PPPPPPPP/NBQKBNRR'

    let row=1;
    let col=1;
    let team="";
    let piece="";

    for(let i=1;i<=fen.length;i++)
        {
            let char = fen[i-1];
            if(char=='/')
                {
                    row++;
                    col=1;
                }
            
            // console.log(`${row+10+(col-1)}`+"\n");

            // let square=(col<9)?document.getElementById(`${row+10+(col-1)}`):"";
            // console.log(square);
            // if(square=="")
            //     continue;
            if(col>8)
                {
                    col=1;
                }
                let square=document.getElementById(`${row*10+(col)}`);
            
                
                
                col=col+1;

            if( char>='A' && char<='Z')
                team="white";
            else
                team="black";

         if(char=='p' || char=='P')
            piece = "pawn";
        else if(char == 'r' || char=='R')
            piece = "rook";
        else if(char == 'n' || char=='N')
            piece = "knight"
        else if(char == 'b' || char=='B')
            piece = "bishop"
        else if(char == 'q' || char=='Q')
            piece = "queen"
        else if(char == 'k' || char=='K')
            piece = "king"

        else if(char=='/')
            piece="";
        
        if(piece!="")
            {
            let finalpiece = createPiece(team,piece);
            
            square.appendChild(finalpiece);
            
           console.log(square.id+" with the piece "+team+"-"+piece);
        
           
        }
}
}
createBoard();
setBoard();

//function to setBoard ends



   
   
    let compBoard=[["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]];

   
   
   
    
   
