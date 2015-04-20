it('function definition order', function() {
    function isNimble(){ return true; }

    expect(/*TODO:write variable*/).toBeTruthy();
    expect(/*TODO:write variable*/).toBeFalsy();
    expect(/*TODO:write variable*/).toBeFalsy();

    var canFly = function(){ return true; };
    window.isDeadly = function(){ return true; };

    expect(isNimble).toBeTruthy();
    expect(canFly).toBeTruthy();
    expect(isDeadly).toBeTruthy();
});

xit('Does the order of function definition matter?', function() {
    var canFly = function(){ return true; };
    window.isDeadly = function(){ return true; };

    //TODO: uncomment one line
    //expect( isNimble() && canFly() && isDeadly()).toBeTruthy();
    //expect( isNimble() && canFly() && isDeadly()).toBeFalsy();

    function isNimble(){ return true; }
});

xit('How to call function itself?', function() {
    function yell(n){
        return n > 0 ? /*TODO:change function*/Math.min(n-1) + "a" : "hiy";
    }

    expect(yell(4)).toBe('hiyaaaa');
});


xit('What is the name of a function?', function() {
    var ninja = function myNinja(){
        expect(ninja).toBe(myNinja);
    };
    ninja();

    //TODO: uncomment one
    //expect(typeof myNinja).toBe('function');
    //expect(typeof myNinja).toBe('undefined');

    expect(typeof ninja).toBe('function');
});


xit('Fix the code', function() {
    var ninja = {
        yell: function(n){
			/*FIX SOMETHING HERE*/ 
            return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
        }
    };
    expect(ninja.yell(4)).toBe("hiyaaaa");

    var samurai = { yell: ninja.yell };
    var ninja = null;

    try {
        samurai.yell(4);
    } catch(e){
		console.log(e);
        expect.fail();
    }
});

xit('Can you cache the results of this function?', function() {
    function isPrime( num ) {
        var prime = num != 1; // Everything but 1 can be prime
        for ( var i = 2; i < num; i++ ) {
            if ( num % i == 0 ) {
                prime = false;
                break;
            }
        }

        return prime;
    }

    expect(isPrime(5)).toBeTruthy();
    expect(isPrime.cache[5]).toBeTruthy();
});

xit('What happens if a function is an object property?', function() {
    var katana = {
        isSharp: true,
        use: function(){
            this.isSharp = !this.isSharp;
        }
    };
    katana.use();

    //TODO: uncomment one line
    //expect(katana.isSharp).toBeFalsy();
    //expect(katana.isSharp).toBeTruthy();
});



xit('Fix the code. What exactly does context represent?', function() {
    function katana(){
        this.isSharp = true;
    }
    katana();

    expect(window.isSharp).toBeTruthy();

    var shuriken = {
        toss: function(){
            isSharp = true;
        }
    };
    shuriken.toss();

    expect(shuriken.isSharp).toBeTruthy();
});


xit('How can we change the context of a function?', function() {
    var object = {};
    function fn(){
        return this;
    }

    expect( /*TODO:run function with object context*/).toBe(object);
});

xit('How can we implement looping with a callback?', function() {
    function loop(array, fn){
        for ( var i = 0; i < array.length; i++ ) {
            //TODO: Implement me!
        }
    }
    var num = 0;
    loop([0, 1, 2], function(value){
        expect(value).toBe(num++);
        expect(this instanceof Array).toBeTruthy();
    });

    expect(num).toBe(3);
});

xit('Add a method that gives a name to the ninja.', function() {
    function Ninja(name){
        //TODO: Implement!
    }

    var ninja = new Ninja("John");
    expect(ninja.name).toBe('John');

    ninja.changeName("Bob");
    expect(ninja.name).toBe('Bob');
});
