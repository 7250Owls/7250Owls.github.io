function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');
    const target = document.getElementById(sectionId);
    if (target) target.style.display = 'block';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    const activeLink = Array.from(navItems).find(link => {
        const onclick = link.getAttribute('onclick');
        return onclick && onclick.includes(sectionId);
    });
    if (activeLink) activeLink.classList.add('active');
    if (sectionId === 'stats') { fetchTeamStats(); }
    if (sectionId === 'live') { fetchLiveStream(); }
    window.scrollTo(0, 0);
}