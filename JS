        var creatTime;
        var clickTime;
        var reactionTime;

        function getRandomColor(){
            var letters="0123456789ABCDEF".split("");
            var color = "#";
            for(i=0; i<6; i++){
                color+=letters[Math.floor(Math.random()*16)];           //形成0-15的隨機數
            }

            return color;
        }

        function circleRadius(){
            var radius = Math.random();
            radius = radius*50;
            return radius;
        }


        function changeTime(){
            var a = 0;
            a = a+document.getElementById("score").innerHTML;
            var time = Math.random();
            if (a < 10) {
                time = time*3000;
            }else if(a>=10&& a<30){
                time = time*1000;
            }else if(a>=30&&a<49){
                time = time*100;
            }else{
                alert("Game Over!"+"Your total time is"+s);
            }

            return time;
        }

        function makebox() {

            
            setTimeout(function(){

                if(Math.random()>0.5){
                    document.getElementById("box").style.width=Math.floor(Math.random()*50+50)+"px";
                    document.getElementById("box").style.height=Math.floor(Math.random()*50+50)+"px";
                    document.getElementById("box").style.borderRadius=circleRadius()+"px";
                    }else{
                    document.getElementById("box").style.width=Math.floor(Math.random()*50+50)+"px";
                    document.getElementById("box").style.height=Math.floor(Math.random()*50+50)+"px";
                    document.getElementById("box").style.borderRadius="0";
                    }                        

                var top=Math.random();

                top=(top*document.body.clientHeight*0.8);

                var left=Math.random();

                left=(left*document.body.clientWidth*0.8);

                document.getElementById("box").style.top = top +"px";

                document.getElementById("box").style.left = left+"px";

                document.getElementById("box").style.backgroundColor=getRandomColor();

                document.getElementById("box").style.display = "block";

                creatTime = Date.now();
            },changeTime());

        }

        var s = 0;
        var t;

        function timer(){

            s = s+1;
            t=setTimeout("timer()",1000)
            document.getElementById("showtime").innerHTML=s;

        }

        document.getElementById("box").onclick=function(){
            /*document.getElementById("box").style.display="none";*/
            this.style.display="none"       //用This可以針對當前的目標
            clickTime = Date.now();

            reactionTime = (clickTime - creatTime)/1000;
            makebox();

            document.getElementById("time").innerHTML=reactionTime;
            document.getElementById("score").innerHTML++;
            
        }

        makebox();
        timer();
        

