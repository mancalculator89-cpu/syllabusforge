// Global State
let syllabiData = [];
let currentSyllabus = null;

// Tab Switching Logic
function switchTab(tabName) {
    // Hide all main view containers
    document.getElementById('view-syllabus').classList.add('hidden');
    document.getElementById('view-mindmap').classList.add('hidden');
    document.getElementById('view-pastpapers').classList.add('hidden');

    // Remove active state from all nav buttons
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active', 'bg-white', 'text-slate-900', 'shadow-sm');
        tab.classList.add('text-slate-600');
    });

    // Activate selected view and button
    document.getElementById(`view-${tabName}`).classList.remove('hidden');
    const activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.classList.add('active', 'bg-white', 'text-slate-900', 'shadow-sm');
    activeBtn.classList.remove('text-slate-600');
}

// Fetch and Initialize JSON Data
async function loadSyllabi() {
    try {
        const response = await fetch('data/syllabi.json');
        const data = await response.json();
        syllabiData = data.syllabi;

        if (syllabiData.length > 0) {
            populateDropdown();
            selectSyllabus(syllabiData[0].id);
        }
    } catch (error) {
        console.error('Failed to load syllabi data:', error);
    }
}

// Populate Dropdown Options dynamically
function populateDropdown() {
    const select = document.getElementById('syllabus-select');
    select.innerHTML = '';

    syllabiData.forEach(syllabus => {
        const option = document.createElement('option');
        option.value = syllabus.id;
        option.textContent = `${syllabus.code} - ${syllabus.title} (${syllabus.level})`;
        select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
        selectSyllabus(e.target.value);
    });
}

// Select and Render a Syllabus
function selectSyllabus(id) {
    currentSyllabus = syllabiData.find(s => s.id === id);
    if (!currentSyllabus) return;

    renderSidebarTree();
    renderSyllabusView();
}

// Render Sidebar Tree Navigation dynamically
function renderSidebarTree() {
    const treeContainer = document.querySelector('.sidebar-tree');
    treeContainer.innerHTML = '';

    currentSyllabus.sections.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'space-y-1 mb-2';

        let topicsHtml = '';
        section.topics.forEach(topic => {
            topicsHtml += `
                <a href="#${topic.id}" class="block px-2 py-1 text-slate-600 hover:bg-slate-100 rounded-md truncate">
                    ${topic.title}
                </a>
            `;
        });

        sectionEl.innerHTML = `
            <a href="#${section.id}" class="flex items-center px-2 py-1.5 text-slate-700 hover:bg-slate-100 rounded-md font-medium group">
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 mr-1"></i>
                <span class="truncate">${section.title}</span>
            </a>
            <div class="pl-4 space-y-1">
                ${topicsHtml}
            </div>
        `;
        treeContainer.appendChild(sectionEl);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

// Render Main Syllabus View dynamically
function renderSyllabusView() {
    const viewContainer = document.getElementById('view-syllabus');
    
    // Header info
    const headerDiv = viewContainer.querySelector('div.border-b');
    headerDiv.innerHTML = `
        <div class="text-xs font-mono text-indigo-600 uppercase tracking-wide">Syllabus Reference [${currentSyllabus.code}]</div>
        <h1 class="text-2xl font-bold text-slate-900 mt-1">${currentSyllabus.title}</h1>
        <p class="text-xs text-slate-500 mt-1">Level: ${currentSyllabus.level} — Parsed structural document view.</p>
    `;

    // Content container
    const contentContainer = document.getElementById('syllabus-content');
    contentContainer.innerHTML = '';

    currentSyllabus.sections.forEach(section => {
        let topicsHtml = '';

        section.topics.forEach(topic => {
            let objectivesHtml = '';
            topic.objectives.forEach(obj => {
                objectivesHtml += `
                    <li class="flex items-start">
                        <span class="objective-bullet mr-2 font-mono text-xs text-slate-400"></span>
                        <div>${obj}</div>
                    </li>
                `;
            });

            topicsHtml += `
                <div id="${topic.id}" class="syllabus-topic ml-4 mb-6">
                    <h3 class="syllabus-topic-title font-semibold text-slate-800 mb-2 flex items-center">
                        <span class="topic-number mr-2 font-mono text-indigo-600"></span>
                        <span>${topic.title}</span>
                    </h3>
                    <ul class="syllabus-objectives space-y-2 ml-6 text-slate-600">
                        ${objectivesHtml}
                    </ul>
                </div>
            `;
        });

        const sectionEl = document.createElement('section');
        sectionEl.id = section.id;
        sectionEl.className = 'syllabus-section';
        sectionEl.innerHTML = `
            <h2 class="syllabus-section-title text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center">
                <span class="section-number mr-2 font-mono text-indigo-700"></span>
                <span>${section.title}</span>
            </h2>
            ${topicsHtml}
        `;
        contentContainer.appendChild(sectionEl);
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    loadSyllabi();
});
