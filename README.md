# 📋 TaskFlow Pro

> A premium, client-side professional task manager designed to seamlessly track work progress, manage deadlines, and export detailed task reports to PDF.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## ✨ Features

TaskFlow Pro is engineered with a modern, glassmorphic dark-mode interface that makes daily task tracking visually engaging and structurally organized.

*   **Three-State Workflow Tabs:** Separate task views into **Not Done**, **Doing**, and **Done** to monitor exactly where your time is being spent.
*   **Comprehensive Task Details:** Track the **Theme/Topic**, **Start Date**, and **Deadline Date** for every entry.
*   **Progress Dashboard:** Visually track completion percentages and overdue items in real time.
*   **Premium PDF Export:** Generate professional, beautifully formatted PDF reports of your tasks with one click, complete with progress summary statistics.
*   **Offline First:** Automatically saves your tasks locally to your browser so you never lose your progress.

---

## 📸 Interface Preview

Below is a conceptual visualization of the high-fidelity dashboard:

```text
+--------------------------------------------------------------------------+
|  📋 TaskFlow Pro                              [ + Add New Task ]  [PDF Export] |
|  ----------------------------------------------------------------------  |
|  [ Progress: 66% Completed ] ========> [==========        ]              |
|                                                                          |
|  +---------------------+  +---------------------+  +---------------------+
|  | 🔴 Not Done (1)     |  | 🟡 Doing (2)        |  | 🟢 Done (3)         |
|  +---------------------+  +---------------------+  +---------------------+
|  | * Fix Navbar Bug    |  | * Refactor API Code |  | * Design Logo       |
|  |   Start: 2026-06-01 |  |   Start: 2026-06-04 |  |   Start: 2026-05-28 |
|  |   Due:   2026-06-05 |  |   Due:   2026-06-08 |  |   Due:   2026-06-02 |
|  |   [Move to Doing >] |  |   [Move to Done >]  |  |   [Archive Task]    |
|  +---------------------+  +---------------------+  +---------------------+
+--------------------------------------------------------------------------+
```

---

## 🛠️ Technology Stack

*   **Frontend Structure:** HTML5 Semantic Markup
*   **Styling & Themes:** Custom CSS3 with dynamic HSL variable color system, glassmorphism filters, and smooth micro-animations.
*   **Application Logic:** Vanilla JS (ES6+) utilizing LocalStorage for data persistence.
*   **PDF Generation:** Client-side print styling optimized for clean A4 multi-page document layout or direct library export.

---

## 📂 Project Structure

```bash
task-manager/
├── index.html        # The main webpage structure & modal components
├── styles.css        # Responsive layouts, glassmorphism theme, and print styles
└── app.js            # Task management logic, status transitions, and PDF generation
```

---

## 🚀 Quick Start

1.  **Clone or Copy** the project files to a local directory:
    ```bash
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```
2.  **Open** the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge):
    *   *Windows:* Double-click `index.html` or run `start index.html` in PowerShell.
    *   *macOS/Linux:* Run `open index.html` or `xdg-open index.html`.
3.  *No web server or build step required!* The application runs completely in the browser.

---

## 📖 How To Use

### 1. Adding a Task
*   Click the **Add Task** button in the header.
*   Enter the **Theme/Topic** of the task.
*   Select the **Start Date** and the **Deadline Date**.
*   Choose the initial state (**Not Done**, **Doing**, or **Done**).
*   Click **Save Task**.

### 2. Updating Task Status
*   Each task card features intuitive controls to move it between status columns (Not Done ➡️ Doing ➡️ Done).
*   Tasks can be edited or deleted at any time.

### 3. Exporting to PDF
*   Click the **Export to PDF** button in the dashboard action bar.
*   The page utilizes a professional CSS print stylesheet that hides web-only controls (like inputs, buttons, and column adjusters) and formats your tasks into a neat, executive-ready table report with:
    *   A professional title and date stamp.
    *   A statistics summary showing total tasks, completed tasks, and completion rate.
    *   Clean, horizontal-ruled rows displaying the Topic, Status, Start Date, and Deadline.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
