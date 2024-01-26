# SERVERLESS #

The video url shows the end product/site in action.

## The Why
Sick of hearing the constant marketing circle-jerk of "serverless" sites, I set out to test whether a truly server-free client only website is possible.

> It is. 

But that's not nearly enough. 

I wanted to create a true serverless site that also fit the following criteria:
- NO SERVER
- NO DATABASE
- ZERO Third party API calls
- Easy to use
- Stateful: It can have state and maintain its state when turned off
- Cross Device: It can work cross devices 
- Self hosting (A Quine)

## The How
To achieve this I created a Bookmarklet (executable browser bookmark), that is a state-remembering quine (It outputs its own source code including current state), that can sync across devices (using browser profile bookmark syncing), and to save state you simply drag a new bookmark into the bookmarks bar (easy to use)

I think its a world first? Happy to be proven wrong.

The final working code is  the code to try it yourself, simply save it as a new bookmark (this is the url portion) and click the bookmark to run. (Note: Whenever you copy code from the internet please do understand what it does before executing it)

## Next Steps
I want to make a Fully working Quine self hosted Python REPL bookmarklet that maintains its own history and state
