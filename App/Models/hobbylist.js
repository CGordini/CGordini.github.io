(function(angular){
    'use strict';

    angular.module('app')

    .factory('Hobbylist', ['Slide',
        function(Slide) {

            var factory = {};

            factory.getSlides = function(){
                var internalList = new Array(3);

                internalList[0] = new Slide("Lights Out in Michigan",
                                            "http://cgordini.kinja.com/lights-out-in-michigan-1783062234",
                                            "July 3rd, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--gbSO5mP4--/c_scale,fl_progressive,q_80,w_800/iu4ecgz2dervdifn5qkj.jpg",
                                            "I've been toying around with getting into blogging about my experiences and fascination with cars, car culture, racing, and the like, and this seems an appropriate platform.<br/><br/>" +
                                            "A little about myself: I'm currently the ripe old age of 25, which means my insurance rates have finally gone down. I pay for car bills, insurance, premium gas, and for my dog's food with a software engineering programming job.<br/><br/>" +
                                            "My first car was a 1999 Pontiac Grand Am SE (read: six cylinders of 170 horsepowers crying for help) Coupe, that I loved right up until it rusted out. Thanks, mid-90's GM and Michigan roads, winters, salt, and Department of Transportation, which deserves an angry rant all to itself" +
                                            "<a href=\"http://cgordini.kinja.com/lights-out-in-michigan-1783062234\">...</a>"
                                        );

                internalList[1] = new Slide("My Car Fax, Part 1",
                                            "http://cgordini.kinja.com/my-car-fax-1783634243",
                                            "July 14th, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--jMwZbWpd--/c_fit,fl_progressive,q_80,w_636/eegssiirfnmk18tpdtv3.jpg",
                                            "I've done a first post* that introduced me, and I figured next up should be discussing my personal car history and what got me into car culture as a whole.<br/><br/>" +
                                            "In this, I'll go over my upbringing, being so close to Detroit and in a UAW household, my first car, my current/second car, and all the fun I've had and mistakes I've made.<br/><br/>" +
                                            "Fair warning, there's a lot here -- maybe this makes up for my recent absence*" +
                                            "<a href=\"http://cgordini.kinja.com/my-car-fax-1783634243\">...</a>"
                                        );

                internalList[2] = new Slide("My Car Fax, Part 2",
                                            "http://cgordini.kinja.com/my-car-fax-part-2-1783634321",
                                            "July 14th, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--kcO_Wdwf--/c_fit,fl_progressive,q_80,w_636/n9ftrvafb5stdqhduhlr.jpg",
                                            "After working three different internships, in the summer of 2012, I finally saved up enough for My Baby, a 2007 Vista Blue Ford<br/> (!!! -- sorry, Dad) Mustang V6. 5-speed manual trans, Pony Package.<br/><br/>" +
                                            "Turns out manual + Vista Blue for that generation (which I actually really wanted, more than the 2010-2014's) is hella rare, and my choices were initially limited to a 600 mile road trip to Nowhere, Nebraska.<br/><br/>" +
                                            "Then one popped up near Lansing, Michigan, and Dad and I snapped on it. Just like that, Cory found himself in debt, and with a credit history" +
                                            "<a href=\"http://cgordini.kinja.com/my-car-fax-part-2-1783634321\">...</a>"
                                        );

                return internalList;
            };

            return factory;
        }
    ]);
})(window.angular);
