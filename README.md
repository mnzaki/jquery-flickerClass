flickerClass
============

A tiny jquery plugin to flicker things into and out of existence. And by things I mean
CSS classes. What were you thinking?

There were a few similar plugins around that apply to work on css values or even
on only opacity, but that felt clunky IMHO.

What?
-----
This plugin allows you to choose a class to toggle at random intervals for
whatever glorious reason

How?
----

It waits in the darkness for an interval randomly chosen between a given range,
then toggles a class on the element and waits for another randomly chosen
interval. Rinse and repeat.

Options
-------

Name        | Type   | Default | Description
----------- | ------ | ------- | -----------
`action`      | string | start   | 'start' or 'stop' the magnificent flickering
`wait` | array | [500, 1000]  | Range for time interval between flickers
`stay` | array | [200, 400]  | Range for time interval for the class to stay in place
`flickerClass` | string | '' | The CSS class, d'oh

Examples
--------
Start flickering:
```javascript
  $(".idont").flickerClass({flickerClass: "ido",
                      wait: [3000, 10000],
                      stay: [500, 700]});
```
Start flickering a different class:
```javascript
  $(".idont").flickerClass({flickerClass: "nope",
                      wait: [200, 1000],
                      stay: [3000, 7000]});
```
Stop the first one:
```javascript
  $(".idont").flickerClass({action: "stop",
                            flickerClass: "ido"});
```

Demo
----
There ain't one yet.

But WHY?
--------
How can this possibly be useful, you ask? Why subliminal messages of course!
This is the perfect way to turn those bounces into loyal customers. Just overlay
a div saying "DO IT" "NOW" or something, over your mega subscribe button, and
make it flicker randomly for a 100 milliseconds or so and watch as your
subscriptions skyrocket without them even understanding why they are doing it!

