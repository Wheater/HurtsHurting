import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let userEric = { name: 'Eric Hurt', tagLine: 'Husband and Father', description: 'Eric is a husband and father that endeavors to stay fit and healthy. Follow his progress here.', imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-9/1094926_686949534701590_699162428_n.jpg?oh=f7f40f492e1f61a3ceefe8cee0ea421f&oe=59642B45', gamesProfile: { athleteId: 240020, statsHtml: '<div class="container"><ul class="stats-container"><li><div class="stats-section"><table class="stats"><tbody><tr><th class="stats-header" scope="row">Back Squat</th><td>300 lb</td></tr><tr><th class="stats-header" scope="row">Clean and Jerk</th><td>225 lb</td></tr><tr><th class="stats-header" scope="row">Snatch</th><td>185 lb</td></tr></tbody></table></div><div class="stats-section"><table class="stats"><tbody><tr><th class="stats-header" scope="row">Deadlift</th><td>355 lb</td></tr><tr><th class="stats-header" scope="row">Fight Gone Bad</th><td>--</td></tr><tr><th class="stats-header"scope="row">Max Pull-ups</th><td>30</td></tr></tbody></table></div></li><li><div class="stats-section"><table class="stats"><tbody><tr><th class="stats-header" scope="row">Fran</th><td>5:50</td></tr><tr><th class="stats-header" scope="row">Grace</th><td>3:33</td></tr><tr><th class="stats-header" scope="row">Helen</th><td>10:30</td></tr></tbody></table></div><div class="stats-section"><table class="stats"><tbody><tr><th class="stats-header" scope="row">Filthy 50</th><td>--</td></tr><tr><th class="stats-header"scope="row">Sprint 400m</th><td>--</td></tr><tr><th class="stats-header"scope="row">Run 5k</th><td>27:00</td></tr></tbody></table></div></li></ul></div>' }};
    let userElizabeth = { name: 'Elizabeth Hurt', tagLine: 'Wife and Mother', description: 'Elizabeth is a qualified BA. She runs the HAF and keeps everyone in line!', imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-9/734523_692669950796215_1424458622_n.jpg?oh=e987cb843360ed119691836b0a3cedc3&oe=595E3A36', gamesProfile: null  };
    
    let users = [
      userEric,
      userElizabeth
    ];

    let wods = [
      { user: userEric, date: new Date(2017, 2, 22), description: '<p>Weighted pull-ups 3-3-3-3-3 reps<br>Row 1,000 meters</p>', results: "25 - 35 - 44 - 53 - 62 - 70<br/><br/>3:31" },
      { user: userEric, date: new Date(2017, 2, 21), description: '<div class="content"><p>Midline March</a></p><p>3 rounds for time of:<br>25 GHD sit-ups<br>50-foot handstand walk<br>50-foot overhead walking lunge, 155 lb.</p>', results: 'Scaled to 10 strict HSPU and 50# dumbbell lunges' },
      { user: userEric, date: new Date(2017, 2, 20), description: '<p>Rest day</p>', results: 'N/A' },
      { user: userEric, date: new Date(2017, 2, 19), description: '<p>P90X Yoga</p>', results: '35 minutes' },
      { user: userEric, date: new Date(2017, 2, 24), description: '<p><a href="https://games.crossfit.com/workouts/2017" target="_blank">Workout 17.5</a></p><p>10 rounds for time of:<br>9 thrusters<br>35 double-unders</p><p>Men use 95 lb.<br>Women use 65 lb.</p>', results: '14:46' },      
      { user: userEric, date: new Date(2017, 2, 26), description: '<p>Run 5 km</p>', results: '20:35.1' },
      { user: userEric, date: new Date(2017, 2, 24), description: '<p>Front squat 3-3-3</p><p>Thruster 3-3-3</p><p>Push Jerk 3-3-3</p>', results: '185 - 205 - 205<br>155 - 165 - 165<br>165 - 185 - 185(2)' },
      { user: userEric, date: new Date(2017, 2, 27), description: '<p>3 rounds for time:</p><p>One minute of 135-lb. back squats</p><p>Rest one minute</p><p>One minute of chest-to-bar pull-ups</p><p>Rest one minute</p><p>One minute of 135-lb. power cleans</p><p>Rest one minute</p>', results: '113 reps' }
    ];

    return { 
      wods,
      users
    };
  }
}