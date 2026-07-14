// Social Media Toolkit - App Logic

let selectedPlatform = 'instagram';
let selectedTone = 'professional';
let selectedHashtagPlatform = 'instagram';
let hashtagCount = 20;
let allHashtags = [];

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function selectPlatform(btn) {
    btn.closest('.platform-selector').querySelectorAll('.platform-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    selectedPlatform = btn.dataset.platform;
}

function selectTone(btn) {
    document.querySelectorAll('.tone-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    selectedTone = btn.dataset.tone;
}

function selectHashtagPlatform(btn) {
    document.querySelectorAll('.hashtag-platform-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    selectedHashtagPlatform = btn.dataset.platform;
}

function setHashtagCount(count, btn) {
    document.querySelectorAll('.count-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    hashtagCount = count;
}

function showToast(msg) {
    var t = document.getElementById('emojiToast');
    t.textContent = msg || 'Copied to clipboard!';
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2000);
}

function copyText(btn, text) {
    navigator.clipboard.writeText(text).then(function() {
        var orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = orig; }, 1500);
        showToast('Copied to clipboard!');
    });
}

// Bio Generator Templates
var bioTemplates = {
    instagram: {
        professional: function(name, niche) {
            return [
                name + ' | ' + niche + ' | Building something remarkable',
                niche + ' enthusiast crafting visual stories | ' + name,
                niche + ' | Helping you level up | ' + name,
                name + ' | ' + niche + ' | Creating value daily',
                niche + ' | Digital creator | ' + name
            ];
        },
        creative: function(name, niche) {
            return [
                name + ' | ' + niche + ' by day, dreamer by night',
                niche + ' turning ideas into art | ' + name,
                'Creating worlds through ' + niche + ' | ' + name,
                name + ' | ' + niche + ' | chaos creates beauty',
                'Just a ' + niche + ' making magic | ' + name
            ];
        },
        funny: function(name, niche) {
            return [
                name + ' | professional ' + niche + ' (self-appointed)',
                niche + ' enthusiast who definitely knows what they are doing | ' + name,
                'My therapist says I am a great ' + niche + ' | ' + name,
                name + ' | ' + niche + ' | 10/10 would recommend (to myself)',
                'Official ' + niche + ' professional | ' + name + ' (dont check my history)'
            ];
        },
        minimal: function(name, niche) {
            return [
                name + '. ' + niche + '.',
                niche + ' | ' + name,
                name + ' | ' + niche,
                name + ' | ' + niche,
                niche + '. ' + name + '.'
            ];
        },
        bold: function(name, niche) {
            return [
                name + ' | TOP ' + niche.toUpperCase() + ' | FOLLOW FOR VALUE',
                niche + ' ELITE | ' + name + ' | DM for collabs',
                name + ' | DOMINATING ' + niche.toUpperCase() + ' DAILY',
                'THE ' + niche.toUpperCase() + ' ACCOUNT YOU NEED | ' + name,
                name + ' | ' + niche.toUpperCase() + ' | BUILDING AN EMPIRE'
            ];
        }
    },
    twitter: {
        professional: function(name, niche) {
            return [
                niche + ' | Sharing insights and lessons | ' + name,
                name + ' | ' + niche + '. Thoughts on building and growing.',
                niche + ' practitioner. ' + name + '. Opinions are my own.',
                niche + ' | Writing about growth | ' + name,
                name + ' | ' + niche + ' | Learning in public'
            ];
        },
        creative: function(name, niche) {
            return [
                niche + ' | creating, experimenting, sharing | ' + name,
                name + ' | making ' + niche + ' interesting',
                'Talking about ' + niche + ' and vibes | ' + name,
                niche + ' nerd | ' + name + ' | too many ideas',
                name + ' | turning ' + niche + ' into content'
            ];
        },
        funny: function(name, niche) {
            return [
                niche + ' professional (unemployed) | ' + name,
                'I tweet about ' + niche + ' so you dont have to | ' + name,
                name + ' | my ' + niche + ' hot takes keep me up at night',
                'Certified ' + niche + ' opinion haver | ' + name,
                niche + ' | shitposts and insights | ' + name
            ];
        },
        minimal: function(name, niche) {
            return [
                niche + '. ' + name + '.',
                name + ' | ' + niche,
                niche + ' | ' + name,
                name + '. thoughts on ' + niche + '.',
                name + ' | ' + niche
            ];
        },
        bold: function(name, niche) {
            return [
                name + ' | I break down ' + niche.toUpperCase() + ' so you can win',
                niche + ' insights that actually work | ' + name,
                'Building in public: ' + niche.toUpperCase() + ' | ' + name,
                name + ' | ' + niche.toUpperCase() + ' | 100+ posts on growth',
                'Follow ' + name + ' for ' + niche.toUpperCase() + ' that hits different'
            ];
        }
    },
    tiktok: {
        professional: function(name, niche) {
            return [
                niche + ' | Teaching you what works | ' + name,
                name + ' | ' + niche + ' tips and tutorials',
                niche + ' educator | ' + name + ' | Follow for more',
                'Making ' + niche + ' simple | ' + name,
                name + ' | ' + niche + ' | New videos weekly'
            ];
        },
        creative: function(name, niche) {
            return [
                niche + ' but make it aesthetic | ' + name,
                name + ' | creating ' + niche + ' content you will love',
                'Your new ' + niche + ' obsession | ' + name,
                niche + ' creator | ' + name + ' | the algorithm loves me',
                name + ' | ' + niche + ' | creative chaos'
            ];
        },
        funny: function(name, niche) {
            return [
                niche + ' but funny | ' + name + ' (trust me)',
                'Making ' + niche + ' content my mom still does not understand | ' + name,
                name + ' | ' + niche + ' | 99% effort 1% talent',
                'I do ' + niche + ' for a living (barely) | ' + name,
                name + ' | ' + niche + ' | the content you did not know you needed'
            ];
        },
        minimal: function(name, niche) {
            return [
                name + '. ' + niche + '.',
                niche + ' | ' + name,
                name + ' | ' + niche + ' creator',
                niche + '. follow ' + name + '.',
                name + ' | ' + niche
            ];
        },
        bold: function(name, niche) {
            return [
                name + ' | THE ' + niche.toUpperCase() + ' ACCOUNT TO FOLLOW',
                niche + ' GROWTH | ' + name + ' | DAILY CONTENT',
                name + ' | teaching ' + niche.toUpperCase() + ' that goes viral',
                'VIRAL ' + niche.toUpperCase() + ' TIPS | ' + name,
                name + ' | ' + niche.toUpperCase() + ' | YOUR FAVORITE CREATORS CREATOR'
            ];
        }
    },
    linkedin: {
        professional: function(name, niche) {
            return [
                niche + ' Professional | Sharing Industry Insights | ' + name,
                name + ' | ' + niche + ' Expert | Passionate About Innovation',
                'Senior ' + niche + ' Professional | ' + name + ' | Building the Future',
                niche + ' Leader | Driving Results | ' + name,
                name + ' | ' + niche + ' | Open to Connecting'
            ];
        },
        creative: function(name, niche) {
            return [
                niche + ' Professional with a Creative Edge | ' + name,
                'Thinking differently about ' + niche + ' | ' + name,
                name + ' | Where ' + niche + ' Meets Innovation',
                niche + ' | Creative Problem Solver | ' + name,
                name + ' | Redefining ' + niche + ' One Project at a Time'
            ];
        },
        funny: function(name, niche) {
            return [
                niche + ' Professional (with a sense of humor) | ' + name,
                name + ' | Making ' + niche + ' Less Boring Since Day One',
                niche + ' Expert Who Still Reads the Manual | ' + name,
                name + ' | ' + niche + ' | Yes, I Actually Read My DMs',
                'Professional ' + niche + ' Person | ' + name + ' | Will Trade Insights for Coffee'
            ];
        },
        minimal: function(name, niche) {
            return [
                niche + ' | ' + name,
                name + ' | ' + niche,
                niche + ' Professional. ' + name + '.',
                name + ' | ' + niche,
                niche + ' | ' + name
            ];
        },
        bold: function(name, niche) {
            return [
                name + ' | TOP ' + niche.toUpperCase() + ' LEADER | Driving Innovation',
                'Award-Winning ' + niche.toUpperCase() + ' Professional | ' + name,
                name + ' | ' + niche.toUpperCase() + ' | SPEAKER AUTHOR INNOVATOR',
                'Transforming ' + niche.toUpperCase() + ' | ' + name + ' | Lets Connect',
                name + ' | ' + niche.toUpperCase() + ' EXECUTIVE | Building Tomorrows Solutions'
            ];
        }
    },
    youtube: {
        professional: function(name, niche) {
            return [
                niche + ' | Teaching What Works | ' + name,
                name + ' | Your Go-To ' + niche + ' Channel',
                niche + ' tutorials and deep dives | ' + name,
                'Learn ' + niche + ' with ' + name + ' | New Videos Weekly',
                name + ' | ' + niche + ' | Subscribe for Value'
            ];
        },
        creative: function(name, niche) {
            return [
                niche + ' but make it entertaining | ' + name,
                name + ' | creating ' + niche + ' content you will actually enjoy',
                'Your daily dose of ' + niche + ' | ' + name,
                niche + ' creator | ' + name + ' | Making learning fun',
                name + ' | ' + niche + ' | The Channel You Have Been Looking For'
            ];
        },
        funny: function(name, niche) {
            return [
                niche + ' but I make it funny | ' + name,
                name + ' | Making ' + niche + ' Content Since YouTube Was Cool',
                'I teach ' + niche + ' (and make jokes) | ' + name,
                name + ' | ' + niche + ' | Entertainment + Education',
                'The ' + niche + ' Channel That Does Not Take Itself Too Seriously | ' + name
            ];
        },
        minimal: function(name, niche) {
            return [
                name + '. ' + niche + '.',
                niche + ' | ' + name,
                name + ' | ' + niche + ' Tutorials',
                niche + '. Subscribe.',
                name + ' | ' + niche
            ];
        },
        bold: function(name, niche) {
            return [
                name + ' | #1 ' + niche.toUpperCase() + ' CHANNEL ON YOUTUBE',
                niche + ' MASTERY | ' + name + ' | SUBSCRIBE NOW',
                name + ' | teaching ' + niche.toUpperCase() + ' that changes lives',
                'THE DEFINITIVE ' + niche.toUpperCase() + ' CHANNEL | ' + name,
                name + ' | ' + niche.toUpperCase() + ' | YOUR FAVORITE CREATORS FAVORITE'
            ];
        }
    }
};

function generateBio() {
    var name = document.getElementById('bioName').value.trim() || 'Your Name';
    var niche = document.getElementById('bioNiche').value.trim() || 'Content Creator';
    var platformTemplates = bioTemplates[selectedPlatform] || bioTemplates.instagram;
    var templateFn = platformTemplates[selectedTone] || platformTemplates.professional;
    var bios = templateFn(name, niche);

    var output = document.getElementById('bioOutput');
    var results = document.getElementById('bioResults');
    var count = document.getElementById('bioCount');

    var html = '';
    for (var i = 0; i < bios.length; i++) {
        var escaped = bios[i].replace(/'/g, "\\'");
        html += '<div class="bio-item"><span class="bio-text">' + bios[i] + '</span><button class="bio-copy-btn" onclick="copyText(this,\'' + escaped + '\')">Copy</button></div>';
    }
    results.innerHTML = html;
    count.textContent = bios.length + ' bios generated';
    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
// Emoji Database - Part 1: Smileys
var emojiDatabase = [
    {emoji:'😀',name:'grinning face',category:'smileys',keywords:['happy','smile','grin']},
    {emoji:'😃',name:'grinning face with big eyes',category:'smileys',keywords:['happy','smile','joy']},
    {emoji:'😄',name:'grinning face with smiling eyes',category:'smileys',keywords:['happy','laugh','smile']},
    {emoji:'😁',name:'beaming face',category:'smileys',keywords:['grin','beam','happy']},
    {emoji:'😆',name:'grinning squinting face',category:'smileys',keywords:['laugh','haha','happy']},
    {emoji:'😅',name:'grinning face with sweat',category:'smileys',keywords:['nervous','relief','phew']},
    {emoji:'🤣',name:'rolling on the floor laughing',category:'smileys',keywords:['laugh','rofl','lmao']},
    {emoji:'😂',name:'face with tears of joy',category:'smileys',keywords:['cry','laugh','tears']},
    {emoji:'🙂',name:'slightly smiling face',category:'smileys',keywords:['smile','mild','ok']},
    {emoji:'🙃',name:'upside-down face',category:'smileys',keywords:['silly','sarcastic','ironic']},
    {emoji:'😉',name:'winking face',category:'smileys',keywords:['wink','flirt','playful']},
    {emoji:'😊',name:'smiling face with smiling eyes',category:'smileys',keywords:['blush','shy','happy']},
    {emoji:'😇',name:'smiling face with halo',category:'smileys',keywords:['angel','innocent','good']},
    {emoji:'🥰',name:'smiling face with hearts',category:'smileys',keywords:['love','adore','crush']},
    {emoji:'😍',name:'heart eyes',category:'smileys',keywords:['love','crush','heart']},
    {emoji:'🤩',name:'star struck',category:'smileys',keywords:['amazed','wow','star']},
    {emoji:'😘',name:'face blowing a kiss',category:'smileys',keywords:['kiss','love','flirt']},
    {emoji:'😗',name:'kissing face',category:'smileys',keywords:['kiss','whistle','love']},
    {emoji:'😚',name:'kissing closed eyes',category:'smileys',keywords:['kiss','love','blush']},
    {emoji:'😙',name:'kissing smiling eyes',category:'smileys',keywords:['kiss','love','happy']},
    {emoji:'🥲',name:'smiling face with tear',category:'smileys',keywords:['bittersweet','proud','touched']},
    {emoji:'😋',name:'face savoring food',category:'smileys',keywords:['yum','delicious','tasty']},
    {emoji:'😛',name:'face with tongue',category:'smileys',keywords:['tongue','playful','silly']},
    {emoji:'😜',name:'winking face with tongue',category:'smileys',keywords:['wink','tongue','crazy']},
    {emoji:'🤪',name:'zany face',category:'smileys',keywords:['crazy','wild','silly']},
    {emoji:'😝',name:'squinting face with tongue',category:'smileys',keywords:['tongue','silly','gross']},
    {emoji:'🤑',name:'money-mouth face',category:'smileys',keywords:['money','rich','cash']},
    {emoji:'🤗',name:'hugging face',category:'smileys',keywords:['hug','embrace','warm']},
    {emoji:'🤭',name:'face with hand over mouth',category:'smileys',keywords:['oops','shy','giggle']},
    {emoji:'🤫',name:'shushing face',category:'smileys',keywords:['quiet','secret','shh']},
    {emoji:'🤔',name:'thinking face',category:'smileys',keywords:['think','hmm','ponder']},
    {emoji:'🤐',name:'zipper-mouth face',category:'smileys',keywords:['secret','quiet','zip']},
    {emoji:'🤨',name:'face with raised eyebrow',category:'smileys',keywords:['suspicious','skeptical','hmm']},
    {emoji:'😐',name:'neutral face',category:'smileys',keywords:['meh','blank','neutral']},
    {emoji:'😑',name:'expressionless face',category:'smileys',keywords:['meh','blank','annoyed']},
    {emoji:'😶',name:'face without mouth',category:'smileys',keywords:['silent','mute','nothing']},
    {emoji:'😏',name:'smirking face',category:'smileys',keywords:['smirk','flirt','suggestive']},
    {emoji:'😒',name:'unamused face',category:'smileys',keywords:['bored','annoyed','meh']},
    {emoji:'🙄',name:'face with rolling eyes',category:'smileys',keywords:['eyeroll','annoyed','whatever']},
    {emoji:'😬',name:'grimacing face',category:'smileys',keywords:['awkward','cringe','yikes']},
    {emoji:'🤥',name:'lying face',category:'smileys',keywords:['pinocchio','lie','nose']},
    {emoji:'😌',name:'relieved face',category:'smileys',keywords:['relief','calm','peaceful']},
    {emoji:'😔',name:'pensive face',category:'smileys',keywords:['sad','down','thoughtful']},
    {emoji:'😪',name:'sleepy face',category:'smileys',keywords:['tired','sleep','snot']},
    {emoji:'🤤',name:'drooling face',category:'smileys',keywords:['drool','hungry','yum']},
    {emoji:'😴',name:'sleeping face',category:'smileys',keywords:['sleep','zzz','rest']},
    {emoji:'😷',name:'face with medical mask',category:'smileys',keywords:['mask','sick','covid']},
    {emoji:'🤒',name:'face with thermometer',category:'smileys',keywords:['sick','fever','ill']},
    {emoji:'🤕',name:'face with head-bandage',category:'smileys',keywords:['hurt','injured','ouch']},
    {emoji:'🤢',name:'nauseated face',category:'smileys',keywords:['sick','gross','vomit']},
    {emoji:'🤮',name:'face vomiting',category:'smileys',keywords:['vomit','throw up','gross']},
    {emoji:'🥵',name:'hot face',category:'smileys',keywords:['hot','sweat','heat']},
    {emoji:'🥶',name:'cold face',category:'smileys',keywords:['cold','freeze','ice']},
    {emoji:'🥴',name:'woozy face',category:'smileys',keywords:['drunk','dizzy','tipsy']},
    {emoji:'😵',name:'face with crossed-out eyes',category:'smileys',keywords:['dizzy','knocked out','dead']},
    {emoji:'🤯',name:'exploding head',category:'smileys',keywords:['mind blown','shock','wow']},
    {emoji:'🤠',name:'cowboy hat face',category:'smileys',keywords:['cowboy','yeehaw','western']},
    {emoji:'🥳',name:'partying face',category:'smileys',keywords:['party','celebrate','birthday']},
    {emoji:'🥸',name:'disguised face',category:'smileys',keywords:['disguise','nose','glasses']},
    {emoji:'😎',name:'smiling face with sunglasses',category:'smileys',keywords:['cool','sunglasses','deal with it']},
    {emoji:'🤓',name:'nerd face',category:'smileys',keywords:['nerd','geek','glasses']},
    {emoji:'🧐',name:'face with monocle',category:'smileys',keywords:['monocle','fancy','inspect']},
    {emoji:'😕',name:'confused face',category:'smileys',keywords:['confused','puzzled','huh']},
    {emoji:'😟',name:'worried face',category:'smileys',keywords:['worried','concerned','nervous']},
    {emoji:'🙁',name:'slightly frowning face',category:'smileys',keywords:['sad','frown','unhappy']},
    {emoji:'😮',name:'face with open mouth',category:'smileys',keywords:['surprise','shock','wow']},
    {emoji:'😯',name:'hushed face',category:'smileys',keywords:['surprise','stunned','quiet']},
    {emoji:'😲',name:'astonished face',category:'smileys',keywords:['shock','amazed','wow']},
    {emoji:'😳',name:'flushed face',category:'smileys',keywords:['embarrassed','shy','blush']},
    {emoji:'🥺',name:'pleading face',category:'smileys',keywords:['puppy eyes','please','sad']},
    {emoji:'🥹',name:'face holding back tears',category:'smileys',keywords:['proud','emotional','touched']},
    {emoji:'😦',name:'frowning face with open mouth',category:'smileys',keywords:['shock','surprise','yikes']},
    {emoji:'😧',name:'anguished face',category:'smileys',keywords:['anguish','distressed','oh no']},
    {emoji:'😨',name:'fearful face',category:'smileys',keywords:['fear','afraid','scared']},
    {emoji:'😰',name:'anxious face with sweat',category:'smileys',keywords:['nervous','anxious','worried']},
    {emoji:'😥',name:'sad but relieved face',category:'smileys',keywords:['phew','relief','sad']},
    {emoji:'😢',name:'crying face',category:'smileys',keywords:['cry','sad','tear']},
    {emoji:'😭',name:'loudly crying face',category:'smileys',keywords:['cry','bawling','sad']},
    {emoji:'😱',name:'face screaming in fear',category:'smileys',keywords:['scream','horror','shock']},
    {emoji:'😖',name:'confounded face',category:'smileys',keywords:['confused','frustrated','ugh']},
    {emoji:'😣',name:'persevering face',category:'smileys',keywords:['struggle','effort','trying']},
    {emoji:'😞',name:'disappointed face',category:'smileys',keywords:['sad','disappointed','letdown']},
    {emoji:'😓',name:'downcast face with sweat',category:'smileys',keywords:['cold sweat','hard work','phew']},
    {emoji:'😩',name:'weary face',category:'smileys',keywords:['tired','exhausted','ugh']},
    {emoji:'😫',name:'tired face',category:'smileys',keywords:['tired','exhausted','fed up']},
    {emoji:'🥱',name:'yawning face',category:'smileys',keywords:['bored','tired','sleepy']},
    {emoji:'😤',name:'face with steam from nose',category:'smileys',keywords:['angry','frustrated','huff']},
    {emoji:'😡',name:'pouting face',category:'smileys',keywords:['angry','mad','rage']},
    {emoji:'😠',name:'angry face',category:'smileys',keywords:['angry','mad','annoyed']},
    {emoji:'🤬',name:'face with symbols on mouth',category:'smileys',keywords:['swear','curse','angry']},
    {emoji:'😈',name:'smiling face with horns',category:'smileys',keywords:['devil','evil','naughty']},
    {emoji:'👿',name:'angry face with horns',category:'smileys',keywords:['devil','angry','evil']},
    {emoji:'💀',name:'skull',category:'smileys',keywords:['dead','death','laughing']},
    {emoji:'💩',name:'pile of poo',category:'smileys',keywords:['poop','crap','funny']},
    {emoji:'🤡',name:'clown face',category:'smileys',keywords:['clown','joke','fool']},
    {emoji:'👹',name:'ogre',category:'smileys',keywords:['monster','demon','japanese']},
    {emoji:'👺',name:'goblin',category:'smileys',keywords:['monster','angry','japanese']},
    {emoji:'👻',name:'ghost',category:'smileys',keywords:['halloween','spooky','boo']},
    {emoji:'👽',name:'alien',category:'smileys',keywords:['ufo','extraterrestrial','space']},
    {emoji:'👾',name:'alien monster',category:'smileys',keywords:['game','ufo','retro']},
    {emoji:'🤖',name:'robot',category:'smileys',keywords:['bot','machine','ai']},
    {emoji:'😺',name:'grinning cat',category:'smileys',keywords:['cat','happy','smile']},
    {emoji:'😸',name:'grinning cat with smiling eyes',category:'smileys',keywords:['cat','happy','grin']},
    {emoji:'😹',name:'cat with tears of joy',category:'smileys',keywords:['cat','laugh','tears']},
    {emoji:'😻',name:'smiling cat with heart eyes',category:'smileys',keywords:['cat','love','heart']},
    {emoji:'😼',name:'cat with wry smile',category:'smileys',keywords:['cat','smirk','sly']},
    {emoji:'😽',name:'kissing cat',category:'smileys',keywords:['cat','kiss','love']},
    {emoji:'🙀',name:'weary cat',category:'smileys',keywords:['cat','shock','scared']},
    {emoji:'😿',name:'crying cat',category:'smileys',keywords:['cat','sad','cry']},
    {emoji:'😾',name:'pouting cat',category:'smileys',keywords:['cat','angry','mad']},
    {emoji:'🫶',name:'heart hands',category:'smileys',keywords:['love','heart','appreciate']},
    {emoji:'👐',name:'open hands',category:'smileys',keywords:['hands','open','hug']},
    {emoji:'🤲',name:'palms up together',category:'smileys',keywords:['hands','prayer','cupped']},
    {emoji:'🤝',name:'handshake',category:'smileys',keywords:['deal','agree','shake']},
    {emoji:'🙏',name:'folded hands',category:'smileys',keywords:['pray','please','thank you']},
    {emoji:'✌️',name:'victory hand',category:'smileys',keywords:['peace','victory','two']},
    {emoji:'🤞',name:'crossed fingers',category:'smileys',keywords:['luck','hope','fingers']},
    {emoji:'🤟',name:'love-you gesture',category:'smileys',keywords:['love','rock','ily']},
    {emoji:'🤘',name:'sign of the horns',category:'smileys',keywords:['rock','metal','horns']},
    {emoji:'👌',name:'OK hand',category:'smileys',keywords:['ok','perfect','good']},
    {emoji:'🤌',name:'pinched fingers',category:'smileys',keywords:['italian','what','chef kiss']},
    {emoji:'👍',name:'thumbs up',category:'smileys',keywords:['like','approve','yes']},
    {emoji:'👎',name:'thumbs down',category:'smileys',keywords:['dislike','no','bad']},
    {emoji:'✊',name:'raised fist',category:'smileys',keywords:['fist','power','solidarity']},
    {emoji:'👊',name:'oncoming fist',category:'smileys',keywords:['punch','fist','bro']},
    {emoji:'🤛',name:'left-facing fist',category:'smileys',keywords:['fist','bro','bump']},
    {emoji:'🤜',name:'right-facing fist',category:'smileys',keywords:['fist','bro','bump']},
    {emoji:'👏',name:'clapping hands',category:'smileys',keywords:['clap','applause','bravo']},
    {emoji:'🙌',name:'raising hands',category:'smileys',keywords:['celebrate','hooray','woohoo']},
    {emoji:'💪',name:'flexed biceps',category:'smileys',keywords:['strong','muscle','flex']}
];
// Emoji Database - Part 2: Symbols, Objects, Animals, Food, Travel, Flags
var emojiSymbols = [
    {emoji:'❤️',name:'red heart',category:'symbols',keywords:['love','heart','red']},
    {emoji:'🧡',name:'orange heart',category:'symbols',keywords:['love','heart','orange']},
    {emoji:'💛',name:'yellow heart',category:'symbols',keywords:['love','heart','yellow']},
    {emoji:'💚',name:'green heart',category:'symbols',keywords:['love','heart','green']},
    {emoji:'💙',name:'blue heart',category:'symbols',keywords:['love','heart','blue']},
    {emoji:'💜',name:'purple heart',category:'symbols',keywords:['love','heart','purple']},
    {emoji:'🖤',name:'black heart',category:'symbols',keywords:['love','heart','dark']},
    {emoji:'🤍',name:'white heart',category:'symbols',keywords:['love','heart','pure']},
    {emoji:'🤎',name:'brown heart',category:'symbols',keywords:['love','heart','brown']},
    {emoji:'💔',name:'broken heart',category:'symbols',keywords:['broken','sad','heartbreak']},
    {emoji:'💯',name:'hundred points',category:'symbols',keywords:['100','perfect','score']},
    {emoji:'🔥',name:'fire',category:'symbols',keywords:['hot','fire','lit','trending']},
    {emoji:'⭐',name:'star',category:'symbols',keywords:['star','favorite','rating']},
    {emoji:'🌟',name:'glowing star',category:'symbols',keywords:['star','shine','sparkle']},
    {emoji:'✨',name:'sparkles',category:'symbols',keywords:['sparkle','shine','new']},
    {emoji:'⚡',name:'high voltage',category:'symbols',keywords:['lightning','fast','energy']},
    {emoji:'🎉',name:'party popper',category:'symbols',keywords:['party','celebrate','tada']},
    {emoji:'🎊',name:'confetti ball',category:'symbols',keywords:['party','confetti','celebrate']},
    {emoji:'🎈',name:'balloon',category:'symbols',keywords:['party','balloon','birthday']},
    {emoji:'🎁',name:'wrapped gift',category:'symbols',keywords:['gift','present','birthday']},
    {emoji:'🏆',name:'trophy',category:'symbols',keywords:['winner','champion','award']},
    {emoji:'🥇',name:'gold medal',category:'symbols',keywords:['first','winner','gold']},
    {emoji:'🎯',name:'bullseye',category:'symbols',keywords:['target','goal','dart']},
    {emoji:'💎',name:'gem stone',category:'symbols',keywords:['diamond','gem','jewel','luxury']},
    {emoji:'🔮',name:'crystal ball',category:'symbols',keywords:['magic','fortune','future']},
    {emoji:'👑',name:'crown',category:'symbols',keywords:['king','queen','royal','boss']},
    {emoji:'🎨',name:'artist palette',category:'symbols',keywords:['art','paint','creative']},
    {emoji:'🎬',name:'clapper board',category:'symbols',keywords:['movie','film','action']},
    {emoji:'🎤',name:'microphone',category:'symbols',keywords:['sing','karaoke','mic']},
    {emoji:'🎧',name:'headphone',category:'symbols',keywords:['music','listen','earphones']},
    {emoji:'🎸',name:'guitar',category:'symbols',keywords:['music','rock','guitar']},
    {emoji:'📱',name:'mobile phone',category:'objects',keywords:['phone','cell','mobile']},
    {emoji:'💻',name:'laptop',category:'objects',keywords:['computer','mac','pc']},
    {emoji:'📷',name:'camera',category:'objects',keywords:['photo','camera','picture']},
    {emoji:'📚',name:'books',category:'objects',keywords:['book','read','study']},
    {emoji:'💡',name:'light bulb',category:'objects',keywords:['idea','light','bulb']},
    {emoji:'💰',name:'money bag',category:'objects',keywords:['money','cash','rich']},
    {emoji:'🔑',name:'key',category:'objects',keywords:['key','unlock','password']},
    {emoji:'🚀',name:'rocket',category:'objects',keywords:['space','launch','fast']},
    {emoji:'🧸',name:'teddy bear',category:'objects',keywords:['bear','toy','stuffed']},
    {emoji:'🎮',name:'video game',category:'objects',keywords:['game','controller','play']},
    {emoji:'🧩',name:'puzzle piece',category:'objects',keywords:['puzzle','jigsaw','solve']},
    {emoji:'⚽',name:'soccer ball',category:'objects',keywords:['soccer','football','ball']},
    {emoji:'🏀',name:'basketball',category:'objects',keywords:['basketball','ball','nba']},
    {emoji:'🏈',name:'american football',category:'objects',keywords:['football','nfl','sport']},
    {emoji:'🎾',name:'tennis',category:'objects',keywords:['tennis','ball','sport']},
    {emoji:'🥊',name:'boxing glove',category:'objects',keywords:['boxing','punch','fight']},
    {emoji:'🎯',name:'bullseye',category:'objects',keywords:['dart','target','bullseye']},
    {emoji:'🎮',name:'video game',category:'objects',keywords:['game','play','controller']},
    {emoji:'🎲',name:'game die',category:'objects',keywords:['dice','game','roll']},
    {emoji:'♟️',name:'chess pawn',category:'objects',keywords:['chess','game','strategy']},
    {emoji:'🎭',name:'performing arts',category:'objects',keywords:['theater','drama','mask']},
    {emoji:'🖼️',name:'framed picture',category:'objects',keywords:['art','picture','frame']},
    {emoji:'🎨',name:'artist palette',category:'objects',keywords:['art','paint','creative']},
    {emoji:'🧵',name:'thread',category:'objects',keywords:['sewing','thread','needle']},
    {emoji:'🧶',name:'yarn',category:'objects',keywords:['knitting','yarn','wool']},
    {emoji:'👓',name:'glasses',category:'objects',keywords:['glasses','eyes','spectacles']},
    {emoji:'🕶️',name:'sunglasses',category:'objects',keywords:['sunglasses','cool','shade']},
    {emoji:'👔',name:'necktie',category:'objects',keywords:['tie','formal','business']},
    {emoji:'👕',name:'t-shirt',category:'objects',keywords:['shirt','casual','tee']},
    {emoji:'👖',name:'jeans',category:'objects',keywords:['pants','denim','jeans']},
    {emoji:'👗',name:'dress',category:'objects',keywords:['dress','fashion','formal']},
    {emoji:'👙',name:'bikini',category:'objects',keywords:['bikini','beach','swim']},
    {emoji:'👠',name:'high-heeled shoe',category:'objects',keywords:['heel','shoe','fashion']},
    {emoji:'👜',name:'handbag',category:'objects',keywords:['bag','purse','fashion']},
    {emoji:'🎒',name:'backpack',category:'objects',keywords:['backpack','school','bag']},
    {emoji:'👑',name:'crown',category:'objects',keywords:['crown','king','queen','royal']},
    {emoji:'👒',name:'womans hat',category:'objects',keywords:['hat','sun','fashion']},
    {emoji:'🎩',name:'top hat',category:'objects',keywords:['hat','formal','gentleman']},
    {emoji:'🎓',name:'graduation cap',category:'objects',keywords:['graduation','cap','diploma']},
    {emoji:'💄',name:'lipstick',category:'objects',keywords:['makeup','lipstick','beauty']},
    {emoji:'💍',name:'ring',category:'objects',keywords:['ring','engagement','diamond']},
    {emoji:'💎',name:'gem stone',category:'objects',keywords:['diamond','gem','jewel']},
    {emoji:'🔔',name:'bell',category:'objects',keywords:['bell','notification','ring']},
    {emoji:'🎵',name:'musical note',category:'objects',keywords:['music','note','melody']},
    {emoji:'🎶',name:'musical notes',category:'objects',keywords:['music','notes','melody']},
    {emoji:'🎷',name:'saxophone',category:'objects',keywords:['sax','jazz','music']},
    {emoji:'🎹',name:'musical keyboard',category:'objects',keywords:['piano','keyboard','music']},
    {emoji:'🎺',name:'trumpet',category:'objects',keywords:['trumpet','brass','music']},
    {emoji:'🎻',name:'violin',category:'objects',keywords:['violin','strings','music']},
    {emoji:'🥁',name:'drum',category:'objects',keywords:['drum','percussion','beat']},
    {emoji:'📱',name:'mobile phone',category:'objects',keywords:['phone','cell','mobile']},
    {emoji:'💻',name:'laptop',category:'objects',keywords:['laptop','computer','mac']},
    {emoji:'🖥️',name:'desktop computer',category:'objects',keywords:['computer','desktop','monitor']},
    {emoji:'🖨️',name:'printer',category:'objects',keywords:['printer','print','paper']},
    {emoji:'⌨️',name:'keyboard',category:'objects',keywords:['keyboard','type','computer']},
    {emoji:'🖱️',name:'computer mouse',category:'objects',keywords:['mouse','click','computer']},
    {emoji:'📷',name:'camera',category:'objects',keywords:['camera','photo','picture']},
    {emoji:'📸',name:'camera with flash',category:'objects',keywords:['camera','flash','photo']},
    {emoji:'📹',name:'video camera',category:'objects',keywords:['video','camera','record']},
    {emoji:'🎥',name:'movie camera',category:'objects',keywords:['movie','film','cinema']},
    {emoji:'📺',name:'television',category:'objects',keywords:['tv','watch','television']},
    {emoji:'🔍',name:'magnifying glass',category:'objects',keywords:['search','zoom','find']},
    {emoji:'💡',name:'light bulb',category:'objects',keywords:['idea','light','bulb']},
    {emoji:'🔦',name:'flashlight',category:'objects',keywords:['light','torch','dark']},
    {emoji:'📚',name:'books',category:'objects',keywords:['books','read','library']},
    {emoji:'📖',name:'open book',category:'objects',keywords:['book','open','read']},
    {emoji:'📝',name:'memo',category:'objects',keywords:['memo','write','note']},
    {emoji:'💼',name:'briefcase',category:'objects',keywords:['briefcase','work','business']},
    {emoji:'📁',name:'file folder',category:'objects',keywords:['folder','file','organize']},
    {emoji:'📅',name:'calendar',category:'objects',keywords:['calendar','date','day']},
    {emoji:'📊',name:'bar chart',category:'objects',keywords:['chart','statistics','bars']},
    {emoji:'📌',name:'pushpin',category:'objects',keywords:['pin','thumbtack','important']},
    {emoji:'📎',name:'paperclip',category:'objects',keywords:['paperclip','attach','clip']},
    {emoji:'📏',name:'straight ruler',category:'objects',keywords:['ruler','measure','straight']},
    {emoji:'✂️',name:'scissors',category:'objects',keywords:['scissors','cut','trim']},
    {emoji:'🔒',name:'locked',category:'objects',keywords:['lock','secure','private']},
    {emoji:'🔓',name:'unlocked',category:'objects',keywords:['unlock','open','access']},
    {emoji:'🔑',name:'key',category:'objects',keywords:['key','unlock','password']},
    {emoji:'🔨',name:'hammer',category:'objects',keywords:['hammer','tool','build']},
    {emoji:'🔧',name:'wrench',category:'objects',keywords:['wrench','tool','fix']},
    {emoji:'⚙️',name:'gear',category:'objects',keywords:['gear','settings','mechanical']},
    {emoji:'🧲',name:'magnet',category:'objects',keywords:['magnet','attract','pull']},
    {emoji:'🔬',name:'microscope',category:'objects',keywords:['microscope','science','lab']},
    {emoji:'🔭',name:'telescope',category:'objects',keywords:['telescope','space','astronomy']},
    {emoji:'💉',name:'syringe',category:'objects',keywords:['syringe','needle','vaccine']},
    {emoji:'💊',name:'pill',category:'objects',keywords:['medicine','drug','health']},
    {emoji:'🧬',name:'dna',category:'objects',keywords:['dna','genetics','biology']},
    {emoji:'🦠',name:'microbe',category:'objects',keywords:['virus','bacteria','germ']},
    {emoji:'🧪',name:'test tube',category:'objects',keywords:['test','lab','science']},
    {emoji:'🧫',name:'petri dish',category:'objects',keywords:['petri','lab','biology']},
    {emoji:'⚗️',name:'alembic',category:'objects',keywords:['chemistry','distill','lab']},
    {emoji:'🚪',name:'door',category:'objects',keywords:['door','enter','exit']},
    {emoji:'🪞',name:'mirror',category:'objects',keywords:['mirror','reflect','glass']},
    {emoji:'🪟',name:'window',category:'objects',keywords:['window','glass','view']},
    {emoji:'🛏️',name:'bed',category:'objects',keywords:['bed','sleep','rest']},
    {emoji:'🛋️',name:'couch and lamp',category:'objects',keywords:['couch','sofa','living room']},
    {emoji:'🪑',name:'chair',category:'objects',keywords:['chair','seat','sit']},
    {emoji:'🚽',name:'toilet',category:'objects',keywords:['toilet','bathroom','wc']},
    {emoji:'🚿',name:'shower',category:'objects',keywords:['shower','bath','water']},
    {emoji:'🛁',name:'bathtub',category:'objects',keywords:['bathtub','bath','soak']},
    {emoji:'🧴',name:'lotion bottle',category:'objects',keywords:['lotion','cream','bottle']},
    {emoji:'🧹',name:'broom',category:'objects',keywords:['broom','sweep','clean']},
    {emoji:'🧺',name:'basket',category:'objects',keywords:['basket','carry','laundry']},
    {emoji:'🧻',name:'roll of paper',category:'objects',keywords:['paper','towel','toilet paper']},
    {emoji:'🧼',name:'soap',category:'objects',keywords:['soap','wash','clean']},
    {emoji:'🫧',name:'bubbles',category:'objects',keywords:['bubbles','soap','foam']},
    {emoji:'🪥',name:'toothbrush',category:'objects',keywords:['toothbrush','brush','dental']},
    {emoji:'🧽',name:'sponge',category:'objects',keywords:['sponge','clean','absorb']},
    {emoji:'🧯',name:'fire extinguisher',category:'objects',keywords:['fire','extinguish','safety']},
    {emoji:'🛒',name:'shopping cart',category:'objects',keywords:['cart','buy','shop']},
    {emoji:'🚬',name:'cigarette',category:'objects',keywords:['smoke','tobacco','cigarette']},
    {emoji:'⚰️',name:'coffin',category:'objects',keywords:['death','funeral','dead']},
    {emoji:'🗿',name:'moai',category:'objects',keywords:['moai','easter island','statue']},
    {emoji:'🪧',name:'placard',category:'objects',keywords:['sign','placard','protest']},
    {emoji:'🪪',name:'identification card',category:'objects',keywords:['id','card','identity']},
    {emoji:'🪫',name:'low battery',category:'objects',keywords:['battery','charge','low']},
    {emoji:'🛗',name:'elevator',category:'objects',keywords:['elevator','lift','floor']},
    {emoji:'🪞',name:'mirror',category:'objects',keywords:['mirror','reflect','glass']},
    {emoji:'🪟',name:'window',category:'objects',keywords:['window','glass','view']},
    {emoji:'🪤',name:'mouse trap',category:'objects',keywords:['trap','catch','pest']},
    {emoji:'🪆',name:'nesting dolls',category:'objects',keywords:['russian','doll','toy']},
    {emoji:'🪇',name:'maracas',category:'objects',keywords:['maracas','music','party']},
    {emoji:'🪈',name:'flute',category:'objects',keywords:['flute','music','play']},
    {emoji:'🪗',name:'accordion',category:'objects',keywords:['accordion','music','squeeze']},
    {emoji:'🪕',name:'banjo',category:'objects',keywords:['banjo','music','string']},
    {emoji:'🛞',name:'wheel',category:'objects',keywords:['wheel','tire','roll']},
    {emoji:'🛼',name:'roller skate',category:'objects',keywords:['skate','roller','fun']},
    {emoji:'🛹',name:'skateboard',category:'objects',keywords:['skate','board','ride']},
    {emoji:'🛻',name:'pickup truck',category:'objects',keywords:['truck','car','pickup']},
    {emoji:'🛸',name:'flying saucer',category:'objects',keywords:['ufo','alien','space']},
    {emoji:'🚂',name:'locomotive',category:'objects',keywords:['train','steam','railway']},
    {emoji:'🚃',name:'railway car',category:'objects',keywords:['train','car','railway']},
    {emoji:'🚄',name:'high-speed train',category:'objects',keywords:['train','fast','bullet']},
    {emoji:'🚅',name:'bullet train',category:'objects',keywords:['train','fast','shinkansen']},
    {emoji:'🚆',name:'train',category:'objects',keywords:['train','railway','commute']},
    {emoji:'🚇',name:'metro',category:'objects',keywords:['subway','metro','underground']},
    {emoji:'🚈',name:'light rail',category:'objects',keywords:['train','rail','metro']},
    {emoji:'🚉',name:'station',category:'objects',keywords:['station','train','stop']},
    {emoji:'✈️',name:'airplane',category:'travel',keywords:['fly','plane','travel']},
    {emoji:'🛫',name:'airplane departure',category:'travel',keywords:['takeoff','fly','leave']},
    {emoji:'🛬',name:'airplane arrival',category:'travel',keywords:['landing','arrive','fly']},
    {emoji:'⛵',name:'sailboat',category:'travel',keywords:['sail','boat','ocean']},
    {emoji:'🚤',name:'speedboat',category:'travel',keywords:['boat','fast','water']},
    {emoji:'🚢',name:'ship',category:'travel',keywords:['ship','cruise','ocean']},
    {emoji:'🚗',name:'automobile',category:'travel',keywords:['car','drive','vehicle']},
    {emoji:'🚕',name:'taxi',category:'travel',keywords:['taxi','cab','ride']},
    {emoji:'🚙',name:'sport utility vehicle',category:'travel',keywords:['suv','car','vehicle']},
    {emoji:'🚌',name:'bus',category:'travel',keywords:['bus','public','transit']},
    {emoji:'🏎️',name:'racing car',category:'travel',keywords:['race','fast','formula']},
    {emoji:'🚓',name:'police car',category:'travel',keywords:['police','car','cop']},
    {emoji:'🚑',name:'ambulance',category:'travel',keywords:['medical','emergency','hospital']},
    {emoji:'🚒',name:'fire engine',category:'travel',keywords:['fire','emergency','truck']},
    {emoji:'🚐',name:'minibus',category:'travel',keywords:['van','bus','shuttle']},
    {emoji:'🚚',name:'delivery truck',category:'travel',keywords:['delivery','truck','shipping']},
    {emoji:'🚛',name:'articulated lorry',category:'travel',keywords:['truck','semi','lorry']},
    {emoji:'🚜',name:'tractor',category:'travel',keywords:['tractor','farm','agriculture']},
    {emoji:'🏍️',name:'motorcycle',category:'travel',keywords:['bike','motorcycle','ride']},
    {emoji:'🛵',name:'motor scooter',category:'travel',keywords:['scooter','vespa','moped']},
    {emoji:'🚲',name:'bicycle',category:'travel',keywords:['bike','cycle','ride']},
    {emoji:'🛴',name:'kick scooter',category:'travel',keywords:['scooter','kick','ride']},
    {emoji:'🏠',name:'house',category:'travel',keywords:['home','house','building']},
    {emoji:'🏡',name:'house with garden',category:'travel',keywords:['home','garden','house']},
    {emoji:'🏢',name:'office building',category:'travel',keywords:['office','work','building']},
    {emoji:'🏣',name:'Japanese post office',category:'travel',keywords:['post','mail','japanese']},
    {emoji:'🏥',name:'hospital',category:'travel',keywords:['hospital','medical','health']},
    {emoji:'🏦',name:'bank',category:'travel',keywords:['bank','money','finance']},
    {emoji:'🏨',name:'hotel',category:'travel',keywords:['hotel','stay','room']},
    {emoji:'🏪',name:'convenience store',category:'travel',keywords:['store','shop','convenience']},
    {emoji:'🏫',name:'school',category:'travel',keywords:['school','education','learn']},
    {emoji:'🏬',name:'department store',category:'travel',keywords:['store','shop','department']},
    {emoji:'🏭',name:'factory',category:'travel',keywords:['factory','industry','manufacture']},
    {emoji:'🏯',name:'Japanese castle',category:'travel',keywords:['castle','japanese','fortress']},
    {emoji:'🏰',name:'castle',category:'travel',keywords:['castle','palace','fortress']},
    {emoji:'🗼',name:'Tokyo tower',category:'travel',keywords:['tower','tokyo','japan']},
    {emoji:'🗽',name:'Statue of Liberty',category:'travel',keywords:['liberty','new york','america']},
    {emoji:'⛪',name:'church',category:'travel',keywords:['church','religion','worship']},
    {emoji:'🕌',name:'mosque',category:'travel',keywords:['mosque','islam','worship']},
    {emoji:'⛩️',name:'shinto shrine',category:'travel',keywords:['shrine','japanese','torii']},
    {emoji:'⛲',name:'fountain',category:'travel',keywords:['fountain','water','park']},
    {emoji:'⛺',name:'tent',category:'travel',keywords:['camp','tent','outdoor']},
    {emoji:'🌁',name:'foggy',category:'travel',keywords:['fog','bridge','sf']},
    {emoji:'🌃',name:'night with stars',category:'travel',keywords:['night','city','stars']},
    {emoji:'🏙️',name:'cityscape',category:'travel',keywords:['city','skyline','urban']},
    {emoji:'🌄',name:'sunrise over mountains',category:'travel',keywords:['sunrise','mountain','dawn']},
    {emoji:'🌅',name:'sunset',category:'travel',keywords:['sunset','sun','evening']},
    {emoji:'🌆',name:'cityscape at dusk',category:'travel',keywords:['city','dusk','sunset']},
    {emoji:'🌇',name:'sunrise',category:'travel',keywords:['sunrise','dawn','morning']},
    {emoji:'🌉',name:'bridge at night',category:'travel',keywords:['bridge','night','golden gate']},
    {emoji:'🎠',name:'carousel horse',category:'travel',keywords:['carousel','amusement','ride']},
    {emoji:'🎡',name:'ferris wheel',category:'travel',keywords:['ferris','amusement','ride']},
    {emoji:'🎢',name:'roller coaster',category:'travel',keywords:['roller','amusement','thrill']},
    {emoji:'🗺️',name:'world map',category:'travel',keywords:['map','world','travel']},
    {emoji:'🧭',name:'compass',category:'travel',keywords:['compass','navigation','direction']},
    {emoji:'🏔️',name:'snow-capped mountain',category:'travel',keywords:['mountain','snow','nature']},
    {emoji:'⛰️',name:'mountain',category:'travel',keywords:['mountain','nature','hiking']},
    {emoji:'🌋',name:'volcano',category:'travel',keywords:['volcano','eruption','lava']},
    {emoji:'🗻',name:'mount fuji',category:'travel',keywords:['fuji','japan','mountain']},
    {emoji:'🏕️',name:'camping',category:'travel',keywords:['camp','tent','outdoor']},
    {emoji:'🏖️',name:'beach with umbrella',category:'travel',keywords:['beach','umbrella','sand']},
    {emoji:'🏜️',name:'desert',category:'travel',keywords:['desert','sand','dry']},
    {emoji:'🏝️',name:'desert island',category:'travel',keywords:['island','tropical','palm']},
    {emoji:'🏞️',name:'national park',category:'travel',keywords:['park','nature','scenic']},
    {emoji:'🏟️',name:'stadium',category:'travel',keywords:['stadium','sports','arena']},
    {emoji:'🏛️',name:'classical building',category:'travel',keywords:['building','museum','ancient']},
    {emoji:'🏗️',name:'building construction',category:'travel',keywords:['construction','crane','building']},
    {emoji:'🧱',name:'brick',category:'travel',keywords:['brick','wall','building']},
    {emoji:'🪨',name:'rock',category:'travel',keywords:['rock','stone','boulder']},
    {emoji:'🪵',name:'wood',category:'travel',keywords:['wood','log','lumber']},
    {emoji:'🛖',name:'hut',category:'travel',keywords:['hut','shelter','house']},
    {emoji:'🌍',name:'globe Europe-Africa',category:'travel',keywords:['globe','world','earth']},
    {emoji:'🌎',name:'globe Americas',category:'travel',keywords:['globe','world','earth']},
    {emoji:'🌏',name:'globe Asia-Australia',category:'travel',keywords:['globe','world','earth']},
    {emoji:'🌐',name:'globe with meridians',category:'travel',keywords:['globe','world','internet']},
    {emoji:'🪐',name:'ringed planet',category:'travel',keywords:['saturn','planet','space']},
    {emoji:'🌑',name:'new moon',category:'travel',keywords:['moon','dark','night']},
    {emoji:'🌓',name:'first quarter moon',category:'travel',keywords:['moon','half','night']},
    {emoji:'🌕',name:'full moon',category:'travel',keywords:['moon','full','bright']},
    {emoji:'🌙',name:'crescent moon',category:'travel',keywords:['moon','night','sleep']},
    {emoji:'☀️',name:'sun',category:'travel',keywords:['sun','sunny','bright']},
    {emoji:'🌝',name:'full moon face',category:'travel',keywords:['moon','face','bright']},
    {emoji:'🌞',name:'sun with face',category:'travel',keywords:['sun','face','happy']},
    {emoji:'⭐',name:'star',category:'travel',keywords:['star','night','sky']},
    {emoji:'🌟',name:'glowing star',category:'travel',keywords:['star','shine','bright']},
    {emoji:'🌠',name:'shooting star',category:'travel',keywords:['star','shooting','wish']},
    {emoji:'🌌',name:'milky way',category:'travel',keywords:['galaxy','space','stars']},
    {emoji:'☁️',name:'cloud',category:'travel',keywords:['cloud','sky','weather']},
    {emoji:'⛅',name:'sun behind cloud',category:'travel',keywords:['cloud','sun','partly cloudy']},
    {emoji:'⛈️',name:'cloud with lightning and rain',category:'travel',keywords:['storm','thunder','rain']},
    {emoji:'🌤️',name:'sun behind small cloud',category:'travel',keywords:['sun','cloud','mostly sunny']},
    {emoji:'🌥️',name:'sun behind large cloud',category:'travel',keywords:['cloud','overcast','grey']},
    {emoji:'🌦️',name:'sun behind rain cloud',category:'travel',keywords:['sun','rain','showers']},
    {emoji:'🌧️',name:'cloud with rain',category:'travel',keywords:['rain','cloud','wet']},
    {emoji:'🌨️',name:'cloud with snow',category:'travel',keywords:['snow','cold','winter']},
    {emoji:'🌩️',name:'cloud with lightning',category:'travel',keywords:['lightning','thunder','storm']},
    {emoji:'🌪️',name:'tornado',category:'travel',keywords:['tornado','cyclone','wind']},
    {emoji:'🌫️',name:'fog',category:'travel',keywords:['fog','mist','cloudy']},
    {emoji:'🌈',name:'rainbow',category:'travel',keywords:['rainbow','color','sky']},
    {emoji:'☔',name:'umbrella with rain drops',category:'travel',keywords:['umbrella','rain','wet']},
    {emoji:'❄️',name:'snowflake',category:'travel',keywords:['snow','cold','winter']},
    {emoji:'☃️',name:'snowman',category:'travel',keywords:['snowman','winter','snow']},
    {emoji:'⛄',name:'snowman without snow',category:'travel',keywords:['snowman','winter','cold']},
    {emoji:'🔥',name:'fire',category:'travel',keywords:['fire','hot','warm']},
    {emoji:'💧',name:'droplet',category:'travel',keywords:['water','drop','rain']},
    {emoji:'🌊',name:'water wave',category:'travel',keywords:['wave','ocean','sea']}
];
emojiDatabase = emojiDatabase.concat(emojiSymbols);
// Emoji Database - Part 3: Animals, Food, More Smileys
var emojiAnimals = [
    {emoji:'🐶',name:'dog face',category:'animals',keywords:['dog','puppy','pet']},
    {emoji:'🐱',name:'cat face',category:'animals',keywords:['cat','kitten','pet']},
    {emoji:'🐭',name:'mouse face',category:'animals',keywords:['mouse','rodent','pet']},
    {emoji:'🐹',name:'hamster',category:'animals',keywords:['hamster','pet','cute']},
    {emoji:'🐰',name:'rabbit face',category:'animals',keywords:['rabbit','bunny','pet']},
    {emoji:'🦊',name:'fox',category:'animals',keywords:['fox','clever','wild']},
    {emoji:'🐻',name:'bear',category:'animals',keywords:['bear','teddy','wild']},
    {emoji:'🐼',name:'panda',category:'animals',keywords:['panda','bear','chinese']},
    {emoji:'🐨',name:'koala',category:'animals',keywords:['koala','australia','cute']},
    {emoji:'🐯',name:'tiger face',category:'animals',keywords:['tiger','wild','cat']},
    {emoji:'🦁',name:'lion',category:'animals',keywords:['lion','king','wild']},
    {emoji:'🐮',name:'cow face',category:'animals',keywords:['cow','farm','milk']},
    {emoji:'🐷',name:'pig face',category:'animals',keywords:['pig','farm','oink']},
    {emoji:'🐸',name:'frog',category:'animals',keywords:['frog','toad','green']},
    {emoji:'🐵',name:'monkey face',category:'animals',keywords:['monkey','ape','primate']},
    {emoji:'🐔',name:'chicken',category:'animals',keywords:['chicken','hen','farm']},
    {emoji:'🐧',name:'penguin',category:'animals',keywords:['penguin','antarctic','cute']},
    {emoji:'🐦',name:'bird',category:'animals',keywords:['bird','fly','tweet']},
    {emoji:'🦆',name:'duck',category:'animals',keywords:['duck','quack','water']},
    {emoji:'🦅',name:'eagle',category:'animals',keywords:['eagle','bird','america']},
    {emoji:'🦉',name:'owl',category:'animals',keywords:['owl','night','wise']},
    {emoji:'🦇',name:'bat',category:'animals',keywords:['bat','night','vampire']},
    {emoji:'🐺',name:'wolf',category:'animals',keywords:['wolf','wild','howl']},
    {emoji:'🐴',name:'horse face',category:'animals',keywords:['horse','pony','ride']},
    {emoji:'🦄',name:'unicorn',category:'animals',keywords:['unicorn','magic','fantasy']},
    {emoji:'🐝',name:'honeybee',category:'animals',keywords:['bee','honey','buzz']},
    {emoji:'🐛',name:'bug',category:'animals',keywords:['bug','insect','caterpillar']},
    {emoji:'🦋',name:'butterfly',category:'animals',keywords:['butterfly','insect','pretty']},
    {emoji:'🐌',name:'snail',category:'animals',keywords:['snail','slow','shell']},
    {emoji:'🐞',name:'lady beetle',category:'animals',keywords:['ladybug','insect','lucky']},
    {emoji:'🐜',name:'ant',category:'animals',keywords:['ant','insect','work']},
    {emoji:'🕷️',name:'spider',category:'animals',keywords:['spider','insect','web']},
    {emoji:'🐢',name:'turtle',category:'animals',keywords:['turtle','tortoise','slow']},
    {emoji:'🐍',name:'snake',category:'animals',keywords:['snake','slither','reptile']},
    {emoji:'🦎',name:'lizard',category:'animals',keywords:['lizard','reptile','gecko']},
    {emoji:'🦖',name:'T-Rex',category:'animals',keywords:['dinosaur','trex','extinct']},
    {emoji:'🦕',name:'sauropod',category:'animals',keywords:['dinosaur','long neck','extinct']},
    {emoji:'🐙',name:'octopus',category:'animals',keywords:['octopus','tentacle','ocean']},
    {emoji:'🦑',name:'squid',category:'animals',keywords:['squid','ocean','tentacle']},
    {emoji:'🦐',name:'shrimp',category:'animals',keywords:['shrimp','prawn','seafood']},
    {emoji:'🦞',name:'lobster',category:'animals',keywords:['lobster','seafood','claw']},
    {emoji:'🦀',name:'crab',category:'animals',keywords:['crab','seafood','ocean']},
    {emoji:'🐡',name:'blowfish',category:'animals',keywords:['fish','puffer','ocean']},
    {emoji:'🐠',name:'tropical fish',category:'animals',keywords:['fish','tropical','ocean']},
    {emoji:'🐟',name:'fish',category:'animals',keywords:['fish','ocean','swim']},
    {emoji:'🐬',name:'dolphin',category:'animals',keywords:['dolphin','ocean','smart']},
    {emoji:'🐳',name:'spouting whale',category:'animals',keywords:['whale','ocean','spout']},
    {emoji:'🐋',name:'whale',category:'animals',keywords:['whale','ocean','big']},
    {emoji:'🦈',name:'shark',category:'animals',keywords:['shark','ocean','predator']},
    {emoji:'🐊',name:'crocodile',category:'animals',keywords:['crocodile','alligator','reptile']},
    {emoji:'🐆',name:'leopard',category:'animals',keywords:['leopard','wild','cat']},
    {emoji:'🐅',name:'tiger',category:'animals',keywords:['tiger','wild','big cat']},
    {emoji:'🐘',name:'elephant',category:'animals',keywords:['elephant','big','trunk']},
    {emoji:'🦏',name:'rhinoceros',category:'animals',keywords:['rhino','horn','big']},
    {emoji:'🦛',name:'hippopotamus',category:'animals',keywords:['hippo','river','big']},
    {emoji:'🦘',name:'kangaroo',category:'animals',keywords:['kangaroo','australia','jump']},
    {emoji:'🐾',name:'paw prints',category:'animals',keywords:['paw','prints','animal']},
    {emoji:'🦃',name:'turkey',category:'animals',keywords:['turkey','thanksgiving','bird']},
    {emoji:'🐓',name:'rooster',category:'animals',keywords:['rooster','cock','morning']},
    {emoji:'🦩',name:'flamingo',category:'animals',keywords:['flamingo','pink','tropical']},
    {emoji:'🦚',name:'peacock',category:'animals',keywords:['peacock','bird','beautiful']},
    {emoji:'🦜',name:'parrot',category:'animals',keywords:['parrot','bird','talk']},
    {emoji:'🦢',name:'swan',category:'animals',keywords:['swan','bird','elegant']},
    {emoji:'🪿',name:'goose',category:'animals',keywords:['goose','bird','honk']}
];
var emojiFood = [
    {emoji:'🍕',name:'pizza',category:'food',keywords:['pizza','food','italian']},
    {emoji:'🍔',name:'hamburger',category:'food',keywords:['burger','food','fast food']},
    {emoji:'🍟',name:'french fries',category:'food',keywords:['fries','food','potato']},
    {emoji:'🌭',name:'hot dog',category:'food',keywords:['hotdog','food','sausage']},
    {emoji:'🥪',name:'sandwich',category:'food',keywords:['sandwich','food','lunch']},
    {emoji:'🌮',name:'taco',category:'food',keywords:['taco','mexican','food']},
    {emoji:'🌯',name:'burrito',category:'food',keywords:['burrito','mexican','food']},
    {emoji:'🥚',name:'egg',category:'food',keywords:['egg','food','breakfast']},
    {emoji:'🍳',name:'cooking',category:'food',keywords:['egg','frying','breakfast']},
    {emoji:'🥘',name:'shallow pan of food',category:'food',keywords:['pan','food','cooking']},
    {emoji:'🍲',name:'pot of food',category:'food',keywords:['pot','stew','soup']},
    {emoji:'🥗',name:'green salad',category:'food',keywords:['salad','healthy','food']},
    {emoji:'🍿',name:'popcorn',category:'food',keywords:['popcorn','snack','movie']},
    {emoji:'🧂',name:'salt',category:'food',keywords:['salt','seasoning','food']},
    {emoji:'🍱',name:'bento box',category:'food',keywords:['bento','japanese','lunch']},
    {emoji:'🍙',name:'rice ball',category:'food',keywords:['onigiri','japanese','rice']},
    {emoji:'🍚',name:'cooked rice',category:'food',keywords:['rice','food','grain']},
    {emoji:'🍜',name:'steaming bowl',category:'food',keywords:['ramen','noodles','soup']},
    {emoji:'🍝',name:'spaghetti',category:'food',keywords:['pasta','italian','food']},
    {emoji:'🍣',name:'sushi',category:'food',keywords:['sushi','japanese','raw fish']},
    {emoji:'🍤',name:'fried shrimp',category:'food',keywords:['tempura','shrimp','fried']},
    {emoji:'🥟',name:'dumpling',category:'food',keywords:['dumpling','chinese','food']},
    {emoji:'🍦',name:'soft ice cream',category:'food',keywords:['ice cream','dessert','cone']},
    {emoji:'🍨',name:'ice cream',category:'food',keywords:['ice cream','dessert','bowl']},
    {emoji:'🍩',name:'doughnut',category:'food',keywords:['donut','dessert','sweet']},
    {emoji:'🍪',name:'cookie',category:'food',keywords:['cookie','dessert','sweet']},
    {emoji:'🎂',name:'birthday cake',category:'food',keywords:['cake','birthday','celebrate']},
    {emoji:'🍰',name:'shortcake',category:'food',keywords:['cake','strawberry','dessert']},
    {emoji:'🧁',name:'cupcake',category:'food',keywords:['cupcake','dessert','sweet']},
    {emoji:'🍫',name:'chocolate bar',category:'food',keywords:['chocolate','candy','sweet']},
    {emoji:'🍬',name:'candy',category:'food',keywords:['candy','sweet','lollipop']},
    {emoji:'🍭',name:'lollipop',category:'food',keywords:['lollipop','candy','sweet']},
    {emoji:'🍯',name:'honey pot',category:'food',keywords:['honey','sweet','bee']},
    {emoji:'☕',name:'hot beverage',category:'food',keywords:['coffee','tea','hot']},
    {emoji:'🍵',name:'teacup without handle',category:'food',keywords:['tea','green tea','japanese']},
    {emoji:'🍶',name:'sake',category:'food',keywords:['sake','japanese','alcohol']},
    {emoji:'🍾',name:'bottle with popping cork',category:'food',keywords:['champagne','celebrate','wine']},
    {emoji:'🍷',name:'wine glass',category:'food',keywords:['wine','alcohol','drink']},
    {emoji:'🍸',name:'cocktail glass',category:'food',keywords:['cocktail','drink','alcohol']},
    {emoji:'🍹',name:'tropical drink',category:'food',keywords:['drink','tropical','cocktail']},
    {emoji:'🍺',name:'beer mug',category:'food',keywords:['beer','alcohol','drink']},
    {emoji:'🍻',name:'clinking beer mugs',category:'food',keywords:['beer','cheers','celebrate']},
    {emoji:'🥂',name:'clinking glasses',category:'food',keywords:['champagne','cheers','celebrate']},
    {emoji:'🥃',name:'tumbler glass',category:'food',keywords:['whiskey','alcohol','drink']},
    {emoji:'🥤',name:'cup with straw',category:'food',keywords:['drink','soda','juice']},
    {emoji:'🧋',name:'bubble tea',category:'food',keywords:['boba','tea','tapioca']},
    {emoji:'🧊',name:'ice',category:'food',keywords:['ice','cold','cube']},
    {emoji:'🥢',name:'chopsticks',category:'food',keywords:['chopsticks','asian','eat']},
    {emoji:'🍽️',name:'fork and knife with plate',category:'food',keywords:['plate','eat','dining']},
    {emoji:'🍴',name:'fork and knife',category:'food',keywords:['eat','cutlery','dining']},
    {emoji:'🥄',name:'spoon',category:'food',keywords:['spoon','eat','soup']},
    {emoji:'🔪',name:'kitchen knife',category:'food',keywords:['knife','cut','kitchen']}
];
var emojiMoreSmileys = [
    {emoji:'🎃',name:'jack-o-lantern',category:'smileys',keywords:['halloween','pumpkin','spooky']},
    {emoji:'🎄',name:'Christmas tree',category:'smileys',keywords:['christmas','tree','holiday']},
    {emoji:'🎆',name:'fireworks',category:'smileys',keywords:['fireworks','celebrate','new year']},
    {emoji:'🎇',name:'sparkler',category:'smileys',keywords:['sparkler','fireworks','celebrate']},
    {emoji:'🧨',name:'firecracker',category:'smileys',keywords:['firecracker','explosion','celebrate']},
    {emoji:'🎋',name:'tanabata tree',category:'smileys',keywords:['tree','japanese','wish']},
    {emoji:'🎎',name:'Japanese dolls',category:'smileys',keywords:['doll','japanese','hina']},
    {emoji:'🎏',name:'carp streamer',category:'smileys',keywords:['fish','japanese','koinobori']},
    {emoji:'🎐',name:'wind chime',category:'smileys',keywords:['chime','wind','japanese']},
    {emoji:'🧧',name:'red envelope',category:'smileys',keywords:['money','chinese','gift']},
    {emoji:'🎀',name:'ribbon',category:'smileys',keywords:['ribbon','bow','gift']},
    {emoji:'🎗️',name:'reminder ribbon',category:'smileys',keywords:['awareness','ribbon','remember']},
    {emoji:'🎟️',name:'admission tickets',category:'smileys',keywords:['ticket','event','admission']},
    {emoji:'🎫',name:'ticket',category:'smileys',keywords:['ticket','admission','event']},
    {emoji:'🎖️',name:'military medal',category:'smileys',keywords:['medal','military','honor']},
    {emoji:'🏅',name:'sports medal',category:'smileys',keywords:['medal','sports','winner']},
    {emoji:'🥈',name:'2nd place medal',category:'smileys',keywords:['silver','second','runner up']},
    {emoji:'🥉',name:'3rd place medal',category:'smileys',keywords:['bronze','third','medal']},
    {emoji:'⚽',name:'soccer ball',category:'smileys',keywords:['soccer','football','ball']},
    {emoji:'⚾',name:'baseball',category:'smileys',keywords:['baseball','ball','sport']},
    {emoji:'🏀',name:'basketball',category:'smileys',keywords:['basketball','ball','nba']},
    {emoji:'🏐',name:'volleyball',category:'smileys',keywords:['volleyball','ball','sport']},
    {emoji:'🏈',name:'american football',category:'smileys',keywords:['football','nfl','sport']},
    {emoji:'🏉',name:'rugby football',category:'smileys',keywords:['rugby','sport','ball']},
    {emoji:'🎾',name:'tennis',category:'smileys',keywords:['tennis','ball','sport']},
    {emoji:'🎳',name:'bowling',category:'smileys',keywords:['bowling','ball','pin']},
    {emoji:'🏏',name:'cricket game',category:'smileys',keywords:['cricket','bat','sport']},
    {emoji:'🏓',name:'ping pong',category:'smileys',keywords:['ping pong','table tennis','sport']},
    {emoji:'🏸',name:'badminton',category:'smileys',keywords:['badminton','shuttlecock','sport']},
    {emoji:'🥊',name:'boxing glove',category:'smileys',keywords:['boxing','punch','fight']},
    {emoji:'🥋',name:'martial arts uniform',category:'smileys',keywords:['karate','martial arts','uniform']},
    {emoji:'⛳',name:'flag in hole',category:'smileys',keywords:['golf','flag','hole']},
    {emoji:'⛸️',name:'ice skate',category:'smileys',keywords:['skate','ice','hockey']},
    {emoji:'🎣',name:'fishing pole',category:'smileys',keywords:['fishing','rod','catch']},
    {emoji:'🎿',name:'skis',category:'smileys',keywords:['ski','snow','winter']},
    {emoji:'🛷',name:'sled',category:'smileys',keywords:['sled','snow','toboggan']},
    {emoji:'🎯',name:'bullseye',category:'smileys',keywords:['dart','target','bullseye']},
    {emoji:'🎮',name:'video game',category:'smileys',keywords:['game','controller','play']},
    {emoji:'🕹️',name:'joystick',category:'smileys',keywords:['game','arcade','retro']},
    {emoji:'🎰',name:'slot machine',category:'smileys',keywords:['gambling','casino','jackpot']},
    {emoji:'🎲',name:'game die',category:'smileys',keywords:['dice','game','roll']},
    {emoji:'♟️',name:'chess pawn',category:'smileys',keywords:['chess','game','strategy']},
    {emoji:'🧩',name:'puzzle piece',category:'smileys',keywords:['puzzle','jigsaw','solve']},
    {emoji:'♠️',name:'spade suit',category:'smileys',keywords:['card','spade','game']},
    {emoji:'♥️',name:'heart suit',category:'smileys',keywords:['card','heart','love']},
    {emoji:'♦️',name:'diamond suit',category:'smileys',keywords:['card','diamond','game']},
    {emoji:'♣️',name:'club suit',category:'smileys',keywords:['card','club','game']},
    {emoji:'🃏',name:'joker',category:'smileys',keywords:['card','joker','wild']},
    {emoji:'🀄',name:'mahjong red dragon',category:'smileys',keywords:['mahjong','game','chinese']},
    {emoji:'🎴',name:'flower playing cards',category:'smileys',keywords:['cards','japanese','hanafuda']}
];
emojiDatabase = emojiDatabase.concat(emojiAnimals).concat(emojiFood).concat(emojiMoreSmileys);

// Hashtag Generator
var hashtagMap = {
    'photo': ['#photography', '#photo', '#photoshoot', '#photooftheday', '#pic'],
    'photography': ['#photography', '#photographer', '#photooftheday', '#picoftheday', '#camera'],
    'nature': ['#nature', '#naturephotography', '#landscape', '#outdoors', '#wilderness'],
    'travel': ['#travel', '#travelgram', '#wanderlust', '#instatravel', '#adventure'],
    'food': ['#food', '#foodie', '#foodporn', '#instafood', '#yummy'],
    'fitness': ['#fitness', '#workout', '#gym', '#fit', '#fitnessmotivation'],
    'fashion': ['#fashion', '#style', '#ootd', '#fashionblogger', '#outfitoftheday'],
    'beauty': ['#beauty', '#makeup', '#skincare', '#beautyblogger', '#cosmetics'],
    'music': ['#music', '#singer', '#songwriter', '#musician', '#newmusic'],
    'art': ['#art', '#artist', '#artwork', '#drawing', '#illustration'],
    'tech': ['#tech', '#technology', '#innovation', '#coding', '#programming'],
    'business': ['#business', '#entrepreneur', '#startup', '#marketing', '#success'],
    'love': ['#love', '#instalove', '#couple', '#relationship', '#heart'],
    'happy': ['#happy', '#happiness', '#smile', '#joy', '#blessed'],
    'sunset': ['#sunset', '#sunsetlovers', '#goldenhour', '#sky', '#sunsetphotography'],
    'sunrise': ['#sunrise', '#sunrisephotography', '#morning', '#dawn', '#goldenhour'],
    'beach': ['#beach', '#beachlife', '#ocean', '#sea', '#beachvibes'],
    'mountain': ['#mountain', '#mountains', '#hiking', '#adventure', '#nature'],
    'city': ['#city', '#citylife', '#urban', '#cityscape', '#downtown'],
    'cat': ['#cat', '#catlovers', '#kitten', '#catsoftiktok', '#meow'],
    'dog': ['#dog', '#doglovers', '#puppy', '#dogsoftiktok', '#dogstagram'],
    'baby': ['#baby', '#newborn', '#momlife', '#parenting', '#cutebaby'],
    'wedding': ['#wedding', '#bride', '#weddingday', '#love', '#marriage'],
    'car': ['#car', '#cars', '#luxurycars', '#supercars', '#automobile'],
    'gaming': ['#gaming', '#gamer', '#gamingcommunity', '#videogames', '#game'],
    'book': ['#book', '#books', '#reading', '#bookstagram', '#booklover'],
    'coffee': ['#coffee', '#coffeelover', '#coffeetime', '#coffeelife', '#morningcoffee'],
    'yoga': ['#yoga', '#yogaeverydamnday', '#yogainspiration', '#meditation', '#mindfulness'],
    'dance': ['#dance', '#dancer', '#dancemusic', '#dancing', '#hiphop'],
    'selfie': ['#selfie', '#selfieoftheday', '#me', '#myself', '#selfietime'],
    'night': ['#night', '#nightlife', '#nightsky', '#nightsky', '#dark'],
    'morning': ['#morning', '#goodmorning', '#morningvibes', '#morningroutine', '#earlybird'],
    'viral': ['#viral', '#viralvideo', '#trending', '#fyp', '#explorepage'],
    'trending': ['#trending', '#trend', '#trendalert', '#popular', '#viral'],
    'motivation': ['#motivation', '#motivational', '#inspiration', '#successmindset', '#hustle'],
    'inspiration': ['#inspiration', '#inspirational', '#motivation', '#quotes', '#mindset'],
    'funny': ['#funny', '#humor', '#comedy', '#lol', '#funnymemes'],
    'meme': ['#meme', '#memes', '#memesdaily', '#funnymemes', '#dankmemes'],
    'throwback': ['#throwback', '#tbt', '#throwbackthursday', '#nostalgia', '#memories'],
    'friendship': ['#friendship', '#friends', '#bestfriends', '#friend', '#friendgoals'],
    'family': ['#family', '#familytime', '#familyfirst', '#mom', '#dad'],
    'life': ['#life', '#lifestyle', '#livelifetothefullest', '#lifequotes', '#enjoylife'],
    'goals': ['#goals', '#lifegoals', '#goalsquotes', '#dreambig', '#hustle'],
    'style': ['#style', '#fashionstyle', '#personalstyle', '#outfit', '#ootd'],
    'home': ['#home', '#homedecor', '#interiordesign', '#house', '#homeinterior'],
    'diy': ['#diy', '#diycrafts', '#handmade', '#crafts', '#diyproject'],
    'health': ['#health', '#healthylifestyle', '#wellness', '#healthy', '#nutrition'],
    'mindset': ['#mindset', '#growthmindset', '#positivity', '#selfcare', '#mentalhealth'],
    'crypto': ['#crypto', '#bitcoin', '#cryptocurrency', '#blockchain', '#eth'],
    'nft': ['#nft', '#nftcommunity', '#nftart', '#digitalart', '#opensea'],
    'stock': ['#stock', '#stocks', '#investing', '#trading', '#wallstreet'],
    'startup': ['#startup', '#entrepreneur', '#founder', '#business', '#hustle'],
    'marketing': ['#marketing', '#digitalmarketing', '#socialmediamarketing', '#seo', '#contentmarketing'],
    'sale': ['#sale', '#discount', '#deal', '#shopping', '#onlineshopping'],
    'summer': ['#summer', '#summer2026', '#summerfun', '#summerstyle', '#beach'],
    'winter': ['#winter', '#winter2026', '#snow', '#cold', '#cozy'],
    'spring': ['#spring', '#spring2026', '#flowers', '#bloom', '#garden'],
    'fall': ['#fall', '#autumn', '#fall2026', '#leaves', '#cozyvibes'],
    'christmas': ['#christmas', '#xmas', '#christmas2026', '#holidays', '#christmasvibes'],
    'halloween': ['#halloween', '#halloween2026', '#spooky', '#costume', '#trickortreat'],
    'newyear': ['#newyear', '#newyears', '#newyear2026', '#resolution', '#celebrate'],
    'birthday': ['#birthday', '#happybirthday', '#birthdaycake', '#celebration', '#party'],
    'workout': ['#workout', '#fitness', '#gym', '#exercise', '#training'],
    'running': ['#running', '#run', '#runner', '#marathon', '#runningmotivation'],
    'swimming': ['#swimming', '#swim', '#swimmer', '#pool', '#swimlife'],
    'basketball': ['#basketball', '#nba', '#basketballislife', '#ball', '#hoops'],
    'soccer': ['#soccer', '#football', '#futbol', '#goals', '#soccerlife'],
    'tennis': ['#tennis', '#tennismatch', '#tennisplay', '#racquet', '#grand'],
    'esports': ['#esports', '#esportsplayer', '#gaming', '#competitivegaming', '#gamer'],
    'podcast': ['#podcast', '#podcasting', '#podcasters', '#listen', '#podcastcommunity'],
    'youtube': ['#youtube', '#youtuber', '#youtubers', '#youtubechannel', '#subscribe'],
    'blog': ['#blog', '#blogger', '#blogging', '#blogpost', '#writer'],
    'seo': ['#seo', '#seotips', '#seomarketing', '#searchengineoptimization', '#google'],
    'email': ['#email', '#emailmarketing', '#newsletter', '#emailcampaign', '#inbox'],
    'design': ['#design', '#graphicdesign', '#designer', '#logodesign', '#branding'],
    'photographer': ['#photographer', '#photography', '#photo', '#camera', '#portrait'],
    'chef': ['#chef', '#cooking', '#foodie', '#recipe', '#cheflife'],
    'traveler': ['#traveler', '#travel', '#wanderlust', '#explorer', '#adventure'],
    'student': ['#student', '#students', '#college', '#university', '#study'],
    'teacher': ['#teacher', '#teachers', '#education', '#school', '#teaching'],
    'doctor': ['#doctor', '#physician', '#medical', '#healthcare', '#hospital'],
    'lawyer': ['#lawyer', '#attorney', '#legal', '#law', '#justice'],
    'nurse': ['#nurse', '#nursing', '#nurselife', '#healthcare', '#medical'],
    'model': ['#model', '#modeling', '#fashionmodel', '#runway', '#photoshoot'],
    'celebrity': ['#celebrity', '#famous', '#star', '#hollywood', '#celebritynews'],
    'pet': ['#pet', '#pets', '#petlover', '#animal', '#cute'],
    'garden': ['#garden', '#gardening', '#gardenlife', '#flowers', '#plant'],
    'cooking': ['#cooking', '#recipe', '#homecooking', '#chef', '#food'],
    'baking': ['#baking', '#baker', '#bread', '#cake', '#pastry'],
    'wine': ['#wine', '#winelover', '#winetasting', '#redwine', '#vineyard'],
    'beer': ['#beer', '#craftbeer', '#beerlover', '#brewery', '#beerstagram'],
    'gym': ['#gym', '#gymlife', '#workout', '#fitness', '#muscle'],
    'crossfit': ['#crossfit', '#crossfitter', '#wod', '#crossfitlife', '#fitness'],
    'meditation': ['#meditation', '#mindfulness', '#yoga', '#zen', '#peace'],
    'sunset': ['#sunset', '#sunsetphotography', '#goldenhour', '#sky', '#evening'],
    'landscape': ['#landscape', '#landscapephotography', '#nature', '#mountains', '#view'],
    'portrait': ['#portrait', '#portraitphotography', '#face', '#headshot', '#model'],
    'street': ['#street', '#streetphotography', '#urban', '#city', '#streetstyle'],
    'blackandwhite': ['#blackandwhite', '#bw', '#monochrome', '#noir', '#classic'],
    'abstract': ['#abstract', '#abstractart', '#art', '#creative', '#contemporary'],
    'minimal': ['#minimal', '#minimalism', '#minimalist', '#simple', '#clean'],
    'vintage': ['#vintage', '#retro', '#old', '#classic', '#throwback'],
    'modern': ['#modern', '#contemporary', '#new', '#innovative', '#current'],
    'luxury': ['#luxury', '#luxurylifestyle', '#luxurycars', '#expensive', '#premium'],
    'streetwear': ['#streetwear', '#streetstyle', '#fashion', '#sneakers', '#hypebeast'],
    'sneakers': ['#sneakers', '#sneakerhead', '#kicks', '#shoes', '#jordan'],
    'watch': ['#watch', '#watches', '#watchfam', '#luxurywatch', '#rolex'],
    'jewelry': ['#jewelry', '#jewellery', '#accessories', '#diamonds', '#gold'],
    'makeup': ['#makeup', '#beauty', '#cosmetics', '#makeuptutorial', '#makeupartist'],
    'skincare': ['#skincare', '#skincareroutine', '#beauty', '#glowingskin', '#selfcare'],
    'hair': ['#hair', '#hairstyle', '#haircut', '#haircolor', '#hairstylist'],
    'nails': ['#nails', '#nailart', '#manicure', '#naildesign', '#nailsalon'],
    'interior': ['#interior', '#interiordesign', '#homedecor', '#decor', '#homestyle'],
    'architecture': ['#architecture', '#building', '#design', '#architects', '#construction'],
    'sustainability': ['#sustainability', '#eco', '#green', '#environment', '#sustainable'],
    'volunteer': ['#volunteer', '#charity', '#community', '#givingback', '#nonprofit']
};

function generateHashtags() {
    var topic = document.getElementById('hashtagTopic').value.trim();
    if (!topic) {
        topic = 'social media';
    }
    var words = topic.toLowerCase().split(/\s+/);
    var generated = new Set();
    words.forEach(function(word) {
        var clean = word.replace(/[^a-z]/g, '');
        if (hashtagMap[clean]) {
            hashtagMap[clean].forEach(function(tag) { generated.add(tag); });
        }
    });
    if (generated.size === 0) {
        Object.keys(hashtagMap).forEach(function(key) {
            if (topic.toLowerCase().includes(key)) {
                hashtagMap[key].forEach(function(tag) { generated.add(tag); });
            }
        });
    }
    if (generated.size === 0) {
        generated.add('#' + topic.replace(/\s+/g, ''));
        generated.add('#' + topic.replace(/\s+/g, '') + 'life');
        generated.add('#' + topic.replace(/\s+/g, '') + 'love');
        generated.add('#viral');
        generated.add('#trending');
        generated.add('#fyp');
        generated.add('#explorepage');
        generated.add('#contentcreator');
        generated.add('#socialmedia');
        generated.add('#instagood');
    }
    allHashtags = Array.from(generated).slice(0, hashtagCount);
    var output = document.getElementById('hashtagOutput');
    var results = document.getElementById('hashtagResults');
    results.innerHTML = allHashtags.map(function(tag) {
        return '<div class="hashtag-tag" onclick="copyText(this,\'' + tag + '\')"><span class="ht">' + tag + '</span></div>';
    }).join('');
    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyAllHashtags() {
    var text = allHashtags.join(' ');
    navigator.clipboard.writeText(text).then(function() {
        showToast('All hashtags copied!');
    });
}

// Font Generator
var fontMaps = {
    'Bold': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    'Italic': '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘻𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789',
    'Bold Italic': '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789',
    'Monospace': '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣0123456789',
    'Script': '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏0123456789',
    'Bold Script': '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃0123456789',
    'Fraktur': '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝔵𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789',
    'Double-struck': '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫0123456789',
    'Sans-Serif': '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓0123456789',
    'Sans-Serif Bold': '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇0123456789',
    'Sans-Serif Italic': '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘻𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789',
    'Sans-Serif Bold Italic': '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789',
    'Circled': 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾ�ⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
    'Squared': '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
    'Parenthesized': '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿ',
    'Fullwidth': 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９'
};

function generateFonts(text) {
    var container = document.getElementById('fontResults');
    if (!text.trim()) {
        container.innerHTML = '<p class="font-placeholder">Start typing above to see font transformations...</p>';
        return;
    }
    var html = '';
    Object.keys(fontMaps).forEach(function(fontName) {
        var chars = fontMaps[fontName];
        var mapped = '';
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            var code = ch.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                mapped += chars[code - 65];
            } else if (code >= 97 && code <= 122) {
                mapped += chars[26 + code - 97];
            } else if (code >= 48 && code <= 57) {
                if (fontName === 'Circled' || fontName === 'Squared' || fontName === 'Fullwidth' || fontName === 'Parenthesized') {
                    mapped += chars[52 + code - 48] || ch;
                } else {
                    mapped += chars[62 + code - 48] || ch;
                }
            } else {
                mapped += ch;
            }
        }
        html += '<div class="font-item"><span class="font-preview">' + mapped + '</span><span class="font-name">' + fontName + '</span><button class="font-copy-btn" onclick="copyText(this,\'' + mapped.replace(/'/g, "\\'") + '\')">Copy</button></div>';
    });
    container.innerHTML = html;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderEmojis(emojiDatabase.slice(0, 100));
});
