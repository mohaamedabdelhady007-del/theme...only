document.querySelector('.d99-menu')?.addEventListener('click',()=>document.querySelector('.d99-header nav').classList.toggle('is-open'));
const dropdown=document.querySelector('.d99-nav-dropdown');
const arrow=document.querySelector('.nav-arrow');
arrow?.addEventListener('mouseenter',()=>dropdown?.classList.add('is-open'));
arrow?.addEventListener('click',(event)=>{event.preventDefault();event.stopPropagation();dropdown?.classList.toggle('is-open')});
arrow?.addEventListener('keydown',(event)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();dropdown?.classList.toggle('is-open')}});
dropdown?.addEventListener('mouseleave',()=>dropdown.classList.remove('is-open'));
