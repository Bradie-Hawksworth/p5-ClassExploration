# :wave: The Basics of P5 

## 🤓 Course overview and learning outcomes 💻 

In the last assignment we looked at objects. We had a go at creating some object and using them within a project. Objects are widely used when programming, they provide a mechanism to encapsulate data and functionality under a single reference point. 

In this assignment we will be answering the question 'What if I need to create many of these object?' and the possible follow up question of 'Do I need to create a new obejct each time?'.

## Classes

A description of Classes from the Mozilla developer documentation is;

*Classes are a template for creating objects. They encapsulate data with code to work on that data.*

The example of a class from the documentation is;
  
  ```js 
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    }
   ```

The above code defines a rectangle class and provides a constructor. A constructor is a function that's called whenever you create an object with the class as it's type. Up to this point we have been creating anonnymous objects with no specific type, the only information we have had knowledge of is the data within the object and the methods available. 

Classes allow us to create objects that have all the same attributes as the class template that we define. 

## Task - Take the code provided in scetch.js and run it in the p5 editor.

What differences can you see? 

Post a screen shot of the output here and discuss why you are seeing what is being printed. 



We have seen the 'this' keyword before and haven't really discussed it. Why do you think we need to use the this keyword within our objects and classes?


## Task - Experiment with the this keyword in the class and object. What happens if you remove this keyword?

Post screenshots of what happens when these keywords are removed. (It may be worth creating a new branch for this experiment). 


Why do you think this is happeneing?



## Task - Implement something as a class.!
Take some time to think about something, what properties does it have? What functionality does it have? 

Provide a description of your class below.


Provide a list of attributes your class will contain below.


Provide a list of functionality your class will contain below.


  
## 📚  Resources / References
* [Mozilla Working with objects Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Mozilla this keyword Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
