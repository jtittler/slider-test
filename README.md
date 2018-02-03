# slider-test
This is an Ionic 3 project demonstrating 2 methods I have tried to create custom components which are subsets of slides. Ideally I get a working page with a custom component then can be multiple slides.
         I want to be able build a custom slideshow made with reusable subsets of slides. Like building
         a master process from sub-processes. You should be able to swipe back and forth between
         all slides as expected.
## test1 (click the test description in the app to launch the test)
This test shows a page with an &lt;ion-slides&gt; control. The control
        has 2 single normal slides, each of which is a custom component.
        Then there is a call to third custom control which is another &lt;ion-slides&gt; control
        with 2 slides in it. So, the page should swipe like their are 4 slides.
### Test 1 Outcome
The 4 slides appear. However, the 2 slides which are in one custom control
        are strangely offset making it unusable. You can see them both after VERY
        exagerated swiping.
## test 2 (click the test description in the app to launch the test)
This test shows a page with an &lt;ion-slides&gt; control. The control
        has 2 single normal slides, each of which is a custom component.
        Then there is a call to third custom control which has 2 &lt;ion-slide&gt; components in it,
        NOT within an &lt;ion-slides&gt; component. So, the page should swipe like their are 4 slides.
### Test 2 Outcome
3 of 4 slides appear. The first two, which are each independent components, and the 1st
        slide of the next custom component which contains 2 &lt;ion-slide&gt; components in it. The
        second slide doesn&quot;t render at all.
