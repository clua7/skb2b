import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.get('/task2B', (req, res) => {
  const namefull = req.query.fullname;
  const resulT = namefull.split(" ");
  //if resulT.length == 0
//  || namefull == "Vladimir27 Vladimirovich Putin" || Vladimir Vladimiro4vich Putin
const testnumber = namefull.match("[0-9]");
const underlineTest = namefull.match("_");
const slashTest = namefull.match("/");

//res.send(testnumber);
  if (namefull == "") {
      res.send('Invalid fullname');
  } else if (testnumber == 1 || testnumber == 2 || testnumber == 3 || testnumber == 4 || testnumber == 5 || testnumber == 6 || testnumber == 7 || testnumber == 8 || testnumber == 9 || testnumber == 0) {
    res.send('Invalid fullname');
  } else if (underlineTest == "_" || slashTest == "/") {
res.send('Invalid fullname');
  } else {

    if (resulT[2] == undefined && resulT[1] != undefined ) {
    res.send(resulT[1] + " " + resulT[0].charAt(0) + ".");
    } else if (resulT[3] != undefined) {
    res.send('Invalid fullname');
    } else if (resulT[1] == undefined) {
    res.send(resulT[0]);
    } else {
    res.send(resulT[2] + " " + resulT[0].charAt(0) + ". " + resulT[1].charAt(0) + ".");
    }

  }

});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
