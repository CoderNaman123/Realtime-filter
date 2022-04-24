function preload()
{

}

function setup()
{
  canvas = createCanvas(350,350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(350,350);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('posnet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
  }
}


function draw()
{
  image(video, 0,0,350,350);
}

function snapshot()
{
    save('myFilteredimage.png');
}
