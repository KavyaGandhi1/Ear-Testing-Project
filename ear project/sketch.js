var GameState = "HOMEPAGE";
var bg;
var HomePage_button;
var RulePage_button;
var MainPage_button;
var MainPage_button2;
var Input;
var speaker;
var audio;
var audio_1,audio_2,audio_3,audio_4,audio5,audio6;

var ReturnPage_button;
var name_1;
var ReturnPage_button2;
var turn;
var run;
var mapImg;
var mapLink;

function preload(){
 bg = loadImage("ears.jpg");

 audio = loadImage("audio.png");

 audio_1  = loadSound("hellosound.m4a");

//sounds.push(audio_1);
 audio_2= loadSound("friend.m4a");

 audio_3 = loadSound("Playing.m4a");
 //sounds.push(audio_2);

 audio_4= loadSound("India.m4a");

audio_5 = loadSound("Coding.m4a")

audio_6 = loadSound("Movies.m4a")
 mapImg = loadImage("googlemaps.jpeg");
}


function setup() {
  createCanvas(1400, 800);
  HomePage_button = createButton("NEXT");
  HomePage_button.position(700,600);
  HomePage_button.hide();
  
   RulePage_button = createButton("Start");
  RulePage_button.position(700,750);
  RulePage_button.hide();
  
  MainPage_button = createButton("Listen Audio");
  MainPage_button.position(670,470);
  //MainPage_button.loadImage(audio);
  MainPage_button.hide();

  MainPage_button2 = createButton("Check Your Results");
  MainPage_button2.position(660,600);
  //MainPage_button.loadImage(audio);
  MainPage_button2.hide();
   

  Input = createInput("Listen and Write");
  Input.position(650,530);
  Input.hide();
   
  ReturnPage_button = createButton("Next");
  ReturnPage_button.position(700,650);
  //MainPage_button.loadImage(audio);
  ReturnPage_button.hide();

  ReturnPage_button2 = createButton("Finish");
  ReturnPage_button2.position(650,700);
  //MainPage_button.loadImage(audio);
  ReturnPage_button2.hide();
 // name_1 = "hello friends how are you";
  //name_2 = "i am your best friend";
  turn = 0;

 
mapLink = createA('https://earth.google.com/web/@6.32594427,74.31234381,-3998.42800806a,17266673.78229618d,35y,341.23462882h,0t,0r','Click This Link To Search For Ear Hospital');
mapLink.position(570,550);
}

function draw() {
  background(bg);
     
  //console.log(run);
  run = random(1,6);
       if(GameState === "HOMEPAGE"){
         HomePage_button.show();
         RulePage_button.hide();
         MainPage_button.hide();
         Input.hide();
         MainPage_button2.hide();
         ReturnPage_button.hide();
         ReturnPage_button2.hide();
         mapLink.hide();
        
         textSize(30);
         fill("red");
         textFont(ITALIC);
         text("Welcome To Ear Testing App",550,100);

         fill("Green");
         text("Through This App You Can Test Your Ears And Check Whether You Have Any Ear Problem Or Not Instantly.",50,250);
         text("Click Next Button To Move To Next Page - ",130,620);

         bg = loadImage("ears.jpg");
         
          HomePage_button.mousePressed(()=>{
            GameState = "RULEPAGE";
            bg = loadImage("rules.jpg");
            turn = 0;
})
}

      
      if(GameState === "RULEPAGE"){
        HomePage_button.hide();
        RulePage_button.show();
        MainPage_button.hide();
        MainPage_button2.hide();
        Input.hide();
        ReturnPage_button.hide();
        ReturnPage_button2.hide();
        mapLink.hide();
        turn = 0;

        textSize(32);
      fill("white");
        text("Listen To Audio And Write What You Hear.",270,330);
        text("Audio Will Be Played At A Certain Volume.",270,510)
        text("If You Write Right,Then You Will Pass The Test.",270,680);
        
                  RulePage_button.mousePressed(()=>{
                GameState = "MAINPAGE";
                bg = loadImage("mainpagebg.jpeg");
    })
        
    }
  
      if(GameState === "MAINPAGE"){
          HomePage_button.hide();
        RulePage_button.hide();
        MainPage_button.show();
        MainPage_button2.show();
        ReturnPage_button.hide();
        ReturnPage_button2.hide();
        mapLink.hide();
        textSize(30);
        fill("red");
        textFont(BOLD);
        text("TEST PAGE",600,50);
        
        textSize(25);
        fill("Green");
        textFont(ITALIC);
        text("1) Keep Your Device at 1Metre Distance.",70,200);
        text("2) Click The Buttton Listen Audio To Hear Sound.",70,230); 
        text("3) You can Hear Sound Only One Time.",70,260);
        text("4) Write Whatever You Hear In Audio.",70,290);
        text("5) Click Check Your Result After Typing In Input.",70,320);
        
        text("6) Don't Write Any Puntuation Mark In the Sentence.",720,200);
        text("7) Write All The Letters Small And Leave Space After Every Word.",720,230);
        text("8) The Audio Will Not be Very Complicated. ",720,260);
        text("9) Listen This Audio At Volume Of Level 5 In Your Device.",720,290);
        text("10)Type The Words Without Spelling Mistake",720,320);
       
        textSize(15);
        fill("black");

        text("Note*- This App Can Only Tell You Whether You Can Hear Sound Properly Or Not",10,770);
        textSize(20);
        text("Note*- Don't Leave Unnecessary Spaces At the Starting And At The End of The Sentence",300,400);
        //text("Audio Will Be Played At A Certain Volume.",270,0)
        //text("If You Write Right,Then You Will Pass The Test.",270,680);
         
      Input.show();
        MainPage_button.mouseClicked(()=>{
          turn = turn+1;

        if(turn<=1){
          if(run >= 1 && run <= 1.5){
            audio_1.play();
          
            //audio_1.setLoop(false);
            name_1  = "hello friends how are you";
          }
          else if(run>1.5 && run<=2){
            audio_2.play();
           
            name_1 = "i am your best friend";
          }
          else if(run>2 && run<=3){
            audio_3.play();
            name_1 = "i like playing";
          }
          else if (run>3 && run<=4){
            audio_4.play();
            name_1 = "i love my india";
          }
          else if (run>4 && run<=5){
            audio_5.play();
            name_1 = "you should learn coding";
          }
          else if (run>5 && run<=6){
            audio_6.play();
            name_1 = "i love watching movies";
          }
        }  

        });
         
        

        MainPage_button2.mousePressed(
          ()=>{
           
            if(Input.value() === name_1){
              GameState = "TESTPASS";
            }
            else{
              GameState = "TESTFAIL";
            }
          } 
        )         
      }
  

    if(GameState === "TESTPASS"){
      bg = loadImage("failtestbg.jpg");

      HomePage_button.hide();
      RulePage_button.hide();
      MainPage_button.hide();
      MainPage_button2.hide();
      ReturnPage_button.show();
      ReturnPage_button2.hide();
      Input.hide();
      mapLink.show();

textSize(30);
fill("Red");
    text("WELL-DONE",600,70);
fill("Black");
    text("You Have Passed The Test.",550,140);

    textSize(27);
    fill("Purple");
    text("It Seems That You Are Not Having Any Ear Problem.",400,400);
    fill("black");
    textSize(13);
    text("Note* - If You Are Still Having Hearing Problem After This Test Also Then You Should Consult An Ear Specialist",20,780);

    }
 
    if(GameState === "TESTFAIL"){
       bg = loadImage("ears.jpg");
       ReturnPage_button2.hide();
       HomePage_button.hide();
      RulePage_button.hide();
      MainPage_button.hide();
      MainPage_button2.hide();
      ReturnPage_button.show();
      mapLink.show();
    Input.hide();
  

    textSize(30);
    fill("Red");
    text("FAILEDTEST",600,70);

    fill("black");
    text("You Have Failed The Test.",550,140);

    textSize(27);
    fill("Purple");
    text("It Seems That You Are Having Ear Problems.",430,400);
    text("You Should Consult To An Ear Specialist ",440,440);
    text("It Could Also Be A Spelling Mistake Which Had Made You Fail The Test.",300,500);

    fill("black");
    textSize(13);
    text("Note* - If You Are Still Having Hearing Problem After This Test Also Then You Should Consult An Ear Specialist",20,780);
    }

    ReturnPage_button.mousePressed(()=>{
      GameState = "FINISHPAGE";
    })

  if(GameState === "FINISHPAGE"){
    bg = loadImage("thankyou.jpg");
    HomePage_button.hide();
      RulePage_button.hide();
      MainPage_button.hide();
      MainPage_button2.hide();
      ReturnPage_button.hide();
      ReturnPage_button2.show();
      mapLink.hide();
    Input.hide();

    ReturnPage_button2.mousePressed(()=>{
      GameState = "HOMEPAGE";
    })
  }

  
}




