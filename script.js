document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    document.getElementById('currentDate').innerText = 'Generated on: ' + 
        today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('taskList').appendChild(createTaskRow());
});

function createTaskRow() {
    const row = document.createElement('div');
    row.className = 'task-row';
    row.innerHTML = `
        <div class="form-group">
            <label>Date</label>
            <input type="date" required>
        </div>
        <div class="form-group">
            <label>Theme / Topic of Work</label>
            <input type="text" placeholder="Enter topic description..." required>
        </div>
        <div class="form-group">
            <label>Deadline</label>
            <input type="date" required>
        </div>
        <div class="form-group">
            <label>Status</label>
            <select>
                <option value="Not Done">Not Done ⏳</option>
                <option value="In Progress">In Progress 🔄</option>
                <option value="Done">Done ✅</option>
            </select>
        </div>
        <button class="btn-remove" onclick="this.parentElement.remove()" title="Remove Task">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
    `;
    return row;
}

function addTask() {
    document.getElementById('taskList').appendChild(createTaskRow());
}

function generatePDF() {
    const element = document.getElementById('pdf-content');
    
    const inputs = element.querySelectorAll('input');
    inputs.forEach(input => input.setAttribute('value', input.value));
    
    const selects = element.querySelectorAll('select');
    selects.forEach(select => {
        Array.from(select.options).forEach(opt => opt.removeAttribute('selected'));
        if(select.selectedIndex >= 0) {
            select.options[select.selectedIndex].setAttribute('selected', 'selected');
        }
    });

    element.classList.add('printing');

    const opt = {
        margin:       15,
        filename:     'Work_Tracker_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.classList.remove('printing');
    });
}