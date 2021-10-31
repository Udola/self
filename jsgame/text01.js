//滑鼠追蹤 X.Y 位置
// document.addEventListener("mousemove",(e) =>{
//     console.log(event.clientX);
//     console.log(event.clientY);
// })

//將滑鼠 X.Y 帶入變數
let mouse_x = 0;
let mouse_y = 0;

let ball_x = 0;
let ball_y = 0;
const docStyle = document.documentElement.style;
const strength = 0.15;

let vel_x = 0;
let vel_y = 0;
const drag = 0.15;

document.addEventListener("mousemove",e =>{
    mouse_x = e.clientX;
    mouse_y = e.clientY;
})

//定義 ball X.Y 軸
function delayMotion(){
    // ball_x = mouse_x;
    // ball_y = mouse_y;

    //重新定義 讓球跟滑鼠在跑
    distance_x= mouse_x - ball_x ;
    distance_x *= strength; //強度:數字越小移動的越慢
    vel_x *= drag;
    vel_x += distance_x;
    ball_x += vel_x;   //ball_x 值是0 所以要加回去
    
    distance_y= mouse_y - ball_y ;
    distance_y *= strength;
    vel_y *= drag;
    vel_y += distance_y;
    ball_y += vel_y;
    

    // document.documentElement.style.setProperty("--mouse_x",ball_x);
    //const docStyle = document.documentElement.style;設定常數來簡化程式碼
    docStyle.setProperty("--mouse-x",ball_x);
    docStyle.setProperty("--mouse-y",ball_y);
    //光圈設定
    docStyle.setProperty("--scale",(vel_x + vel_y) * strength);
    //會一直更新 所以要抓取數值至CSS
    requestAnimationFrame(delayMotion);
}
delayMotion();