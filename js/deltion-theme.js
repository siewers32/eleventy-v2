// let menu = document.getElementById('menu');
let pages = document.getElementById('left');
// menu.addEventListener('click', function(e) {
//     e.preventDefault();
//     menuShow();
// });
// window.addEventListener('resize', function() {
//     pages.style.display = 'block';
// });


const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll( '.nav-link' );

    for ( let n in navLinks ) {
        if ( navLinks.hasOwnProperty( n ) ) {
            navLinks[ n ].addEventListener( 'click', e => {
                e.preventDefault( );
                document.querySelector( navLinks[ n ].hash )
                    .scrollIntoView( {
                        behavior: "smooth"
                    } );
            } );
        }
    }
}

const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( 'h2' );

    window.onscroll = ( ) => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        const logo = document.querySelector('img#logo');
        if(scrollPos > 50) {
            logo.classList.remove( 'standard' );
            logo.classList.add( 'small' );
        } else {
            logo.classList.remove('small');
            logo.classList.add( 'standard' );
        }
        for ( let s in sections ) {
            if (sections.hasOwnProperty(s) && sections[s].offsetTop <= (scrollPos + 100)) {
                const id = sections[s].id;
                console.log(id);
                for (let a of document.querySelectorAll('.active')) {
                    a.classList.remove('active');
                }
                for (let f of document.querySelectorAll(`a[href*=${id}]`)) {
                    f.classList.add('active');
                }
            }
        }
    }
}

function menuShow() {
    if(pages.style.display === 'block') {
        pages.style.display = 'none';
    } else {
        pages.style.display = 'block';
    }
}

makeNavLinksSmooth( );
spyScrolling( );