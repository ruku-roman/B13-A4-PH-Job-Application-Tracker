let currentFilter = 'all';
let jobData = [
    {
        id: 1,
        company: 'Mobile First Corp',
        role: 'React Native Developer',
        meta: 'Remote • Full-time • $130,000 - $175,000',
        desc: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
        status: 'none',
    },
    {
        id: 2,
        company: 'WebFlow Agency',
        role: 'Web Designer & Developer',
        meta: 'Los Angeles, CA • Part-time • $80,000 - $120,000',
        desc: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
        status: 'none',
    },
    {
        id: 3,
        company: 'DataViz Solutions',
        role: 'Data Visualization Specialist',
        meta: 'Boston, MA • Full-time • $125,000 - $165,000',
        desc: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
        status: 'none',
    },
    {
        id: 4,
        company: 'CloudFirst Inc',
        role: 'Backend Developer',
        meta: 'Seattle, WA • Full-time • $140,000 - $190,000',
        desc: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
        status: 'none',
    },
    {
        id: 5,
        company: 'Innovation Labs',
        role: 'UI/UX Engineer',
        meta: 'Austin, TX • Full-time • $110,000 - $150,000',
        desc: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
        status: 'none',
    },
    {
        id: 6,
        company: 'MegaCorp Solutions',
        role: 'JavaScript Developer',
        meta: 'New York, NY • Full-time • $130,000 - $170,000',
        desc: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
        status: 'none',
    },
    {
        id: 7,
        company: 'StartupXYZ',
        role: 'Full Stack Engineer',
        meta: 'Remote • Full-time • $120,000 - $160,000',
        desc: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
        status: 'none',
    },
    {
        id: 8,
        company: 'TechCorp Industries',
        role: 'Senior Frontend Developer',
        meta: 'San Francisco, CA • Full-time • $130,000 - $175,000',
        desc: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
        status: 'none',
    },
    {
        id: 9,
        company: 'Global Tech Firm',
        role: 'Software Developer',
        meta: 'Barmingham, UK • Full-time • $140,000 - $155,000',
        desc: 'Global Tech Firm is a software technology venture studio that develops custom products across multiple sectors of the economy.',
        status: 'none',
    },
    {
        id: 10,
        company: 'NVIDIA',
        role: 'Developer Technology Engineer - AI',
        meta: 'Korea, Seoul • Full-time • $155,000 - $190,000',
        desc: 'NVIDIA has been transforming computer graphics, PC gaming, and accelerated computing for more than 25 years. It’s a unique legacy of innovation that’s fueled by great technology—and amazing people.',
        status: 'none',
    },
];

function setFilter(filter) {
    currentFilter = filter;
    updateUI();
}

function toggleStatus(id, newStatus) {
    const job = jobData.find((j) => j.id === id);
    job.status = job.status === newStatus ? 'none' : newStatus;
    updateUI();
}

function deleteJob(id) {
    jobData = jobData.filter((j) => j.id !== id);
    updateUI();
}

function updateUI() {
    const container = document.getElementById('job-container');
    const filteredJobs = jobData.filter(
        (j) =>
            currentFilter === 'all' || j.status === currentFilter,
    );

    // Update Dashboard Counters
    document.getElementById('totalCount').innerText =
        jobData.length;
    document.getElementById('interviewCount').innerText =
        jobData.filter((j) => j.status === 'interview').length;
    document.getElementById('rejectedCount').innerText =
        jobData.filter((j) => j.status === 'rejected').length;
    document.getElementById('tab-count-text').innerText =
        `${filteredJobs.length} jobs`;

    // Update Tab Styles
    ['all', 'interview', 'rejected'].forEach((type) => {
        const btn = document.getElementById(`btn-${type}`);
        if (currentFilter === type) {
            btn.className =
                'px-5 py-2 bg-[#3B82F6] text-white rounded-md text-[13px] font-bold shadow-sm';
        } else {
            btn.className =
                'px-5 py-2 bg-white text-gray-400 border border-gray-100 rounded-md text-[13px] font-bold hover:bg-gray-50';
        }
    });

    // Handle Empty State
    if (filteredJobs.length === 0) {
        container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <img src="./assets/jobs.png" alt="No jobs" class="w-24 mb-6 opacity-50">
            <h3 class="text-xl font-bold text-[#002D5B] mb-2">No jobs available</h3>
            <p class="text-gray-400 font-medium">Check back soon for new job opportunities</p>
        </div>`;
        return;
    }

    // Render Job Cards
    container.innerHTML = filteredJobs
        .map(
            (job) => `
    <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-8 relative transition-all hover:shadow-md">
        <button onclick="deleteJob(${job.id})" class="absolute top-8 right-8 text-gray-300 hover:text-red-500 transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/>
            </svg>
        </button>
        <h3 class="text-xl font-bold text-[#002D5B] mb-1">${job.company}</h3>
        <p class="text-gray-500 font-semibold text-[15px] mb-4">${job.role}</p>
        <div class="text-[13px] text-gray-400 mb-6 font-medium">${job.meta}</div>
        <span class="inline-block px-3 py-1.5 bg-[#EFF6FF] text-[#1E40AF] text-[11px] font-bold rounded uppercase mb-6 tracking-wider">
            ${job.status === 'none' ? 'NOT APPLIED' : job.status}
        </span>
        <p class="text-gray-600 text-[14px] leading-relaxed mb-8 max-w-4xl">${job.desc}</p>
        <div class="flex items-center gap-3">
            <button onclick="toggleStatus(${job.id}, 'interview')" 
                class="px-6 py-2 border rounded-md text-[11px] font-bold uppercase tracking-widest transition-all
                ${job.status === 'interview' ? 'bg-[#10B981] text-white border-[#10B981]' : 'border-[#10B981] text-[#10B981] hover:bg-emerald-50'}">
                INTERVIEW
            </button>
            <button onclick="toggleStatus(${job.id}, 'rejected')" 
                class="px-6 py-2 border rounded-md text-[11px] font-bold uppercase tracking-widest transition-all
                ${job.status === 'rejected' ? 'bg-[#EF4444] text-white border-[#EF4444]' : 'border-[#EF4444] text-[#EF4444] hover:bg-red-50'}">
                REJECTED
            </button>
        </div>
    </div>
`,
        )
        .join('');
}

updateUI();