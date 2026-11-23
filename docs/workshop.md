---
published: true
type: workshop
title: "GitHub Copilot Advanced"
short_title: "GitHub Copilot Advanced"
description: Learn GitHub Copilot fundamentals, then practice advanced workflows in Spec-Driven Development (SDD), app modernization, context engineering (including a hands-on Agent Skills lab), the GitHub Copilot SDK, and security, sandboxing and guardrails. Upcoming chapters cover Squad and Agentic Workflows.
level: intermediate
authors:
  - "Lead: Julia Kordick"
  - "Contributors: Artur Speth, Laetitia Maar, Taja Ly, Diaa Radwan, Anna Wiewer, Efe Sener"
contacts:
  - "@jkordick"
duration_minutes: 300
tags: GitHub, Copilot, AI, Spec-Driven Development, SDD, TypeScript, Node, CLI, Migration, Modernization
navigation_levels: 3
navigation_numbering: false
---

# GitHub Copilot Advanced

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

*Version 3.7 - Oct 2026*

Welcome! This workshop takes you from Copilot fundamentals to hands-on engineering workflows:

1. **Getting Started with GitHub Copilot** - A broad chapter for anyone who has never (or barely) used GitHub Copilot. It covers inline completions, Chat, Agent mode, agent harnesses, the Copilot CLI, custom instructions, prompt files, custom agents, skills, tools and MCP servers.
2. **Context Engineering** - Theory foundations (LLMs, agents, context rot) followed by hands-on exercises adding instructions, scoped rules and skills to a pre-built project, plus a hands-on lab where you build, test and peer-review your own Agent Skill.
3. **Spec-Driven Development (SDD)** - Learn how to make specifications and guide what GitHub Copilot builds, end to end on a small TypeScript/Node feature.
4. **[spec-kit](https://github.com/github/spec-kit)** - Use spec-driven development conveniently with most agentic coding tools.
5. **[Squad](https://github.com/bradygaster/squad)** *(coming soon)* - Use the open-source framework for orchestrating multi-agent development teams.
6. **App modernization** - Use GitHub Copilot to modernize legacy apps, with two hands-on tracks (spec-kit-driven and GitHub Copilot-native custom agents + prompts), plus the off-the-shelf GitHub Copilot modernization agents (VS Code extension and the Modernize CLI).
7. **Agentic Workflows** *(coming soon)*.
8. **The GitHub Copilot SDK** - Embed Copilot directly into your own apps: open sessions, stream responses and let Copilot call custom tools you define in TypeScript/Node.
9. **Security, Sandboxing and Guardrails** - Use Copilot safely in your organization and build your own guardrails for your own agentic AI.

<div class="info" data-title="Who is this for?">

> Developers, tech leads and architects who want to apply agentic AI and GitHub Copilot to more complex scenarios. Prior Copilot experience is helpful but not required.

</div>

<div class="tip" data-title="Where to start">

> New to Copilot? Start with Chapter 1. Already comfortable with the basics? Continue with Context Engineering in Chapter 2, or jump straight to the SDD exercise in Chapter 3. Chapters 5 and 7 are coming soon.

</div>

<div class="warning" data-title="Heads up">

> GitHub Copilot evolves quickly. UI labels, menu locations and feature names may shift between releases. If something looks slightly different in your VS Code, search the Command Palette (`Cmd/Ctrl+Shift+P`) - the feature is almost certainly still there.

</div>

<div class="info" data-title="🗄️ Database marker">

> Wherever you see the 🗄️ marker in this workshop, the database is in play - a data model, data store, or migration decision worth pausing on. Treat it as a "stop and think about the database" cue.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

## Pre-requisites

You need the following before starting:

|  |  |
| --- | --- |
| A GitHub account | [Create free GitHub account](https://github.com/join) |
| GitHub Copilot access | Free, Pro, Business or Enterprise - see below |
| Visual Studio Code | [Download](https://code.visualstudio.com/) |
| GitHub Copilot extension(s) | [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and [Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) |
| Node.js 20+ and npm | [Install](https://nodejs.org) |
| GitHub CLI | [Install](https://cli.github.com/) |
| GitHub Copilot CLI | [Install](https://github.com/github/copilot-cli) |
| A terminal | Any modern shell (bash, zsh, pwsh) |
| A fork of this repo | [Fork `EfeSenerr/ghcp-advanced`](https://github.com/EfeSenerr/ghcp-advanced/fork) and clone your fork locally - you will need the `user-stories/`, `.github/skills/` and `.github/copilot-instructions.md` files for the hands-on exercises |

![The repository's Fork menu, with Create a new fork highlighted](assets/fork.png)

### Getting Copilot access

- **Individual Free/Pro:** sign up at [github.com/github-copilot/signup](https://github.com/github-copilot/signup).
- **Through your organization:** request access at [github.com/settings/copilot](https://github.com/settings/copilot).

<div class="info" data-title="Enterprise organization check">

> Some features in this workshop (Agent mode, MCP, the GitHub Copilot CLI, spec-kit) may be restricted by your organization's policy. The workshop is structured so that each section is **independently useful**; skip what you cannot use.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 1 - Getting Started with GitHub Copilot

> New to GitHub Copilot? **Start here.** This chapter covers the essentials. If you already know the basics, skip ahead to Chapter 2.

## 1.1 Copilot in VS Code

Open a folder in VS Code with the Copilot extensions installed. You will try inline completions, inline chat, the Chat view and Agent mode. You will also learn what an *agent harness* is: it determines which customizations from this chapter are loaded.

### Inline completions

Start typing and Copilot suggests grey inline completions. Accept with `Tab`, dismiss with `Esc`, cycle alternatives with `Alt/Option + ]` / `Alt/Option + [`

> Tip: Check your configured shortcuts under `Ctrl + Shift + P` or `Cmd + Shift + P` -> `Open Keyboard Shortcuts`.

**Try it.** Create `hello.ts` and type:

```ts
// returns the nth Fibonacci number
function fib(n: number): number {
```

Let Copilot complete the function body. Then add `// returns the nth prime` above a second function and notice how the earlier code and comments in the file guide the suggestion.

### Inline chat (`Cmd/Ctrl + I`)

Select code, press `Cmd/Ctrl + I`, and ask for a transformation: *"add input validation and JSDoc"*, *"convert to async/await"*, *"write a unit test for this"*.

### Chat view (`Cmd/Ctrl+Alt+I`)

The Chat view is where you talk to agents next to your code. Before you send the first prompt of a session, the chat input lets you pick four things: the **Session Target** (the agent harness, see below), the **Agent** (Ask, Agent, Plan or one of your custom agents), the **Language model** (or *Auto*) and the **Permissions** level.

With the **Ask** agent selected, chat is for conversation about your code. Use `#` to attach context (files, symbols, selection) and type `/` to see the commands available in the current session (e.g. `/explain`, `/fix`, `/tests`, `/plan`, `/compact`). Which commands show up depends on the harness and agent you picked.

```text
#file:src/auth.ts /explain why does login() throw on empty passwords?
```

> **In the Copilot CLI:** attach files with `@` (not `#`) and just ask in plain language - there is no `/explain` or `/fix`. Slash commands in the CLI are for the session itself (`/agent`, `/mcp`, `/context`, `/compact`, `/usage`, `/resume`, `/cwd`, `/add-dir`). Prefix a line with `!` to run a raw shell command without invoking the model.

### Agent mode

In the Chat view, switch the agent picker from **Ask** to **Agent**. Agent mode can read, create and edit files across your workspace, run commands (with your approval) and iterate until a task is done. This is the surface you will lean on most in Chapter 3.

<div class="tip" data-title="Pick the right built-in agent">

> - **Ask** - questions, explanations, information gathering (read-only tools)
> - **Plan** - research a task and produce an implementation plan for you to review (also via `/plan`)
> - **Agent** - autonomous task execution, coding, execution

</div>

> **In the Copilot CLI:** there is no Ask/Agent toggle - the CLI is always agentic. Cycle into *plan mode* with `Shift+Tab` to design before changes are made, and use `--allow-all` (or `--yolo`) for unattended runs where you accept the risk of skipping approval prompts.

### Agent harnesses

An **agent harness** is the software layer that turns a model into an agent: it runs the agent loop, wires up tools and approvals, and decides **which customization files it loads** (you will dig into this in Chapter 2). VS Code lets you choose the harness per session with the **Session Target** control in the chat input, *before* you send the first prompt.

| Session Target | What runs | What it means for this workshop |
| --- | --- | --- |
| **Copilot** (recommended default) | The shared Copilot runtime (Copilot SDK), the same one behind the Copilot CLI and the GitHub Copilot app. Runs in the Agent Host, so sessions can continue in the background and in other interfaces. | Reads `.github/copilot-instructions.md`, `AGENTS.md`, `.github/instructions/`, `.github/agents/`, `.github/skills/`, and MCP servers. **Does not load prompt files (`.prompt.md`)**: use skills for reusable workflows instead. |
| **Local** | VS Code's built-in harness, running in the editor's extension host. The session is tied to the editor window. | Supports everything above **plus** prompt files, tool sets, custom agent handoffs, and the `/init` and `/create-*` shortcuts. |
| **Claude** / **Codex** | Provider harnesses (Anthropic Claude Agent SDK, OpenAI Codex). | Use their own config locations (`CLAUDE.md`, `.claude/`, `.agents/`). Often disabled by enterprise policy. |
| **Cloud** | The Copilot harness on managed cloud compute. It's an execution target, not a separate harness (experimental). | Same customizations as Copilot, in a separate cloud workspace. |

The active harness shows as a prefix in the chat title.

<div class="info" data-title="Model ≠ harness">

> Changing the model or the agent (Ask / Plan / Agent / custom) does **not** change the harness. Selecting a Claude model in a **Copilot** session still uses the Copilot harness. Whenever a customization "does nothing", first check which harness you are in. The rest of this workshop flags features that only work in the **Local** harness.

</div>

## 1.2 GitHub Copilot CLI
![GitHub Copilot CLI](assets/cli.png)

You can use GitHub Copilot from your terminal with the CLI, without opening an IDE. It runs the same Copilot runtime as the **Copilot** harness in VS Code, so the same instructions, custom agents, skills and MCP servers work in both.


**Try it.** After installing the CLI, open a terminal in a folder or repository, run `copilot --banner`, and ask: “What is this repository about?”

<div class="warning" data-title="Command line tool execution">

> Especially when you run command line tools, always review the execution before accepting it. **Never blindly execute** suggested shell commands (in general).

</div>


## 1.3 copilot-instructions & AGENTS.md

GitHub Copilot reads project-level instructions from `.github/copilot-instructions.md`. There is always only one `copilot-instructions.md` per repository and it needs to be located exactly at `.github/`. You can create more specific instructions in `.github/instructions/*.instructions.md` (e.g. a `documentation.instructions.md`); the scoped files use a frontmatter `applyTo` glob to limit themselves to matching paths. GHCP also interacts with `AGENTS.md` files. You can have multiple of these in your repo. Instructions from `AGENTS.md` files are merged from the repository root downwards to the closest one (e.g. `frontend/AGENTS.md`, `backend/AGENTS.md`). The file always needs to be named exactly `AGENTS.md`.

Two things to keep in mind for both `copilot-instructions.md` and `AGENTS.md`:
1) the information in them should be relevant in *every* context the agent will operate in (because every interaction will load them), and
2) write them so they are verifiable. Avoid vague statements like *"write good code"* or *"follow best practices"*. Stick to rules that can be checked by a CI job (e.g. "tests must be runnable via `pytest`"); plus concrete paths to files and folders the agent should or should not touch.

This repo ships with one [`.github/copilot-instructions.md`](https://github.com/EfeSenerr/ghcp-advanced/blob/main/.github/copilot-instructions.md). Feel free to open and read it. Notice it is short, declarative and project-scoped.

<div class="info" data-title="Harness differences">

> - **Copilot harness:** discovers `AGENTS.md` files at the repo root, in the session's working directory and in every folder in between. Personal always-on instructions live in `~/.copilot/copilot-instructions.md`, and personal scoped ones in `~/.copilot/instructions/`.
> - **Local harness:** attaches the root `AGENTS.md` by default. Nested `AGENTS.md` files require the experimental `chat.useNestedAgentsMdFiles` setting. Personal instructions are stored in your VS Code profile.
> - To manage all of these in one place, run **Chat: Open Customizations** to open the Agent Customizations editor. It shows the customizations for the harness that is currently selected.

</div>

> **In the Copilot CLI:** the same files are picked up automatically - `.github/copilot-instructions.md`, `.github/instructions/**/*.instructions.md` and `AGENTS.md` - when you launch `copilot` inside the repo. No additional configuration needed.

## 1.4 Prompt files

Prompt files (`*.prompt.md`) are **reusable prompts** stored in your repo. They show up in Chat as runnable slash commands that you invoke manually.

<div class="warning" data-title="Local harness only">

> Prompt files run **only in the Local harness**. Before you try this section, open a new chat and set **Session Target** to **Local**. The default **Copilot** harness, the Copilot CLI and the GitHub Copilot app do **not** load `.prompt.md` files. For a reusable workflow that works everywhere, use a skill (see [1.6](#16-agent-skills)).

</div>

Create `.github/prompts/add-test.prompt.md`:

<div class="tip" data-title="Tip">

> You can create it manually or run `CTRL/CMD + Shift + P` -> **Chat: New Prompt File**. You can also open the Agent Customizations editor (**Chat: Open Customizations** -> **Prompts**). With **Local** selected, you can also type `/create-prompt` followed by a description and let the agent write it.

</div>

```markdown
---
agent: agent
description: Add unit tests
---
Look at the source I provide. Write unit tests that cover the main exported functions. Place tests next to the source as `<filename>.test.ts` and run them with `vitest`.
```

Run it from a **Local** chat with `/add-test`, through **Chat: Run Prompt**, or with the play button in the editor title when the file is open. Prompt files can pin an `agent`, `model` and `tools` list in their frontmatter, and they can use `${input:name}` placeholders for values that VS Code asks you for.

> **In the Copilot harness and the Copilot CLI:** `.prompt.md` files are not loaded. Create a user-invoked **skill** instead (shown at the end of [1.6](#16-agent-skills)). If you already have prompt files, run **Chat: Open Customizations** with **Copilot** selected, go to **Migrations**, and use **Convert Prompt to Skills**.

## 1.5 Custom agents

Custom agents (`*.agent.md`) let you create specialized Copilot personas with tailored expertise, tool access and instructions. Store them in `.github/agents/` at the repo level. They are available in VS Code, on github.com and in the Copilot CLI.

Create `.github/agents/test-specialist.agent.md`:

<div class="tip" data-title="Tip">

> Use **Chat: New Custom Agent** from the Command Palette (`CTRL/CMD + Shift + P`), or open **Chat: Open Customizations** -> **Agents** -> **New Agent**. Select your intended harness first, because the editor offers storage locations based on it.

</div>

```markdown
---
name: test-specialist
description: Focuses on test coverage and quality without modifying production code
tools: ["search", "edit", "execute"]
---
You are a testing specialist focused on improving code quality through comprehensive testing. Analyze existing tests, identify coverage gaps, and write unit, integration, and end-to-end tests. Focus only on test
files - avoid modifying production code unless specifically requested.
```

Pick the agent from the agent picker in VS Code Chat (it works in both the **Copilot** and **Local** harness), or use it in the Copilot CLI with the `/agent` command. Personal agents for the Copilot harness and the CLI live in `~/.copilot/agents/`. Set `user-invocable: false` to hide an agent from the picker but keep it available as a subagent. *Handoffs* (buttons that pass control to the next agent) are a Local-harness feature. See [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents) and [Creating custom agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents) for full configuration options.

> **In the Copilot CLI:** same files (`.github/agents/` for the repo, `~/.copilot/agents/` for personal). Pick one interactively with `/agent`, mention it in a prompt (*"use the test-specialist agent to…"*), or launch it directly: `copilot --agent=test-specialist --prompt "…"`. The CLI also ships built-in agents (Explore, Task, General purpose, Code review, Research, Rubber duck).

## 1.6 Agent skills

If you know what you want to do (e.g. converting a svg to a png) you can just tell the agent "how to do it" with the help of a skill.

Skills are folders with a `SKILL.md` file plus optional scripts, templates and examples. Where they live:

| Scope | Copilot harness, Local harness & Copilot CLI | Also recognized |
| --- | --- | --- |
| Project (committed) | `.github/skills/<name>/SKILL.md` | `.agents/skills/`, `.claude/skills/` |
| Personal | `~/.copilot/skills/<name>/SKILL.md` | `~/.agents/skills/`, `~/.claude/skills/` |

To create one in VS Code, run **Chat: Open Customizations** -> **Skills** -> **New Skill**. In any harness you can also just ask the agent: *"Create a project skill named `test-changes` in `.github/skills/` that …"*. With **Local** selected, `/create-skill` and `/skills` are built-in shortcuts. The Copilot harness has no built-in `/create-skill`, so this repo ships its own as a project skill (see below). You can also install skills from **Browse** in the Agent Customizations editor (Customization Marketplace, preview; not available in Local sessions) or with `gh skill`.

This repo ships with four example skills in [`.github/skills/`](https://github.com/EfeSenerr/ghcp-advanced/tree/main/.github/skills):

| Skill | What it does |
| --- | --- |
| `run-tests` | Runs `npm test`, reads failures, fixes the code (not the test), re-runs until green. |
| `lint-and-typecheck` | Runs `tsc --noEmit` then `eslint`, fixes issues in the right order. |
| `convert-svg-to-png` | Wraps a shell script that converts SVG → PNG using whichever tool is available. Shows how a skill can include **scripts** alongside instructions. |
| `create-skill` | Turns the workflow in the current conversation into a new `SKILL.md`. User-invoked only (`disable-model-invocation: true`), so it works like `/create-skill` in every harness. Used in the 2.7 lab. |

Open [`.github/skills/run-tests/SKILL.md`](https://github.com/EfeSenerr/ghcp-advanced/tree/main/.github/skills/run-tests/SKILL.md) to see a minimal example.

Copilot auto-loads a matching skill when it detects a relevant task, or you invoke it explicitly with `/run-tests`. Skills are an [open standard](https://agentskills.io/) - they work across VS Code (Copilot, Local, and with matching folders Claude and Codex), the Copilot CLI, the GitHub Copilot app and other skills-compatible agents.

The `SKILL.md` frontmatter controls how a skill is discovered and invoked:

| Field | Required | Purpose |
| --- | --- | --- |
| `name` | Yes | Lowercase letters, numbers and hyphens only. **Must match the folder name.** Invalid names make the skill fail silently. |
| `description` | Yes | What the skill does **and when to use it**. The agent uses this to decide whether to load it automatically. |
| `argument-hint` | No | Hint shown in the chat input when you invoke the skill as `/name` (e.g. `<storyId>`). |
| `user-invocable` | No | `false` hides the skill from the `/` menu but keeps automatic loading. Default `true`. |
| `disable-model-invocation` | No | `true` means the agent never loads the skill on its own. It runs only when you type `/name`. Default `false`. |
| `context` | No | `fork` runs the skill in its own subagent context instead of inline (experimental). |

> **In the Copilot CLI:** the same `.github/skills/` and `~/.copilot/skills/` locations are honored - no per-tool config required. Use `/skills list` to see what is loaded, `/skills reload` after adding one mid-session, and `/skills info <name>` to check where it came from.

### Skills as reusable prompts in the Copilot harness

Because the **Copilot** harness (and therefore the Copilot CLI and the GitHub Copilot app) doesn't load prompt files, **skills are how you build reusable, on-demand workflows there**. A skill with `disable-model-invocation: true` behaves like a prompt file: it does nothing until you type `/name`.

Here is the `add-test` prompt from [1.4](#14-prompt-files) as a skill. Create `.github/skills/add-test/SKILL.md`:

```markdown
---
name: add-test
description: Add unit tests for the source file or symbol the user names.
argument-hint: <file or function>
disable-model-invocation: true
---
Look at the source the user names after the command. Write unit tests that cover the main exported functions. Place tests next to the source as `<filename>.test.ts` and run them with `vitest`.
```

Open a new chat with **Session Target** set to **Copilot** and run `/add-test src/math.ts`. The same command works in the Copilot CLI.

| | Prompt file (`.prompt.md`) | User-invoked skill (`SKILL.md`) |
| --- | --- | --- |
| Harnesses | Local only | Copilot, Local, Copilot CLI, GitHub Copilot app, other skills-compatible agents |
| Inputs | `${input:name}` prompts you for values | Text after the command (`/add-test src/math.ts`); use `argument-hint` to guide the user |
| Pin agent / model / tools | `agent`, `model`, `tools` in frontmatter | Not in the skill. Pair it with a custom agent if you need that |
| Bundled files | No | Yes: scripts, templates, examples next to `SKILL.md` |

<div class="tip" data-title="Migrating existing prompt files">

> With **Copilot** selected, run **Chat: Open Customizations** -> **Migrations** -> **Convert Prompt to Skills**. VS Code generates skills with `disable-model-invocation: true` and maps `name`, `description` and argument hints. It **drops** `agent`, `model` and `tools`, so review each result. Use **Migrate with Agent** if a prompt depends on a specific agent or tool set.

</div>

## 1.7 MCP servers

The [Model Context Protocol](https://modelcontextprotocol.io) lets GitHub Copilot connect to external tools - issue trackers, databases 🗄️, browsers, your own services and knowledge bases. 

In VS Code, open the `Extensions` view and type `@mcp` to browse the MCP server gallery. You can also run **MCP: Add Server** for a guided setup, or go to **Chat: Open Customizations** -> **MCP Servers** -> **Add Server**.

VS Code understands two configuration formats:

| Format | Location | Top-level key | Read by |
| --- | --- | --- | --- |
| **Portable Copilot format** (recommended for sharing) | `.mcp.json` at the workspace root, or `~/.copilot/mcp-config.json` (user) | `mcpServers` | The Copilot harness and the Copilot CLI read it directly. |
| **VS Code format** | `.vscode/mcp.json` or your VS Code profile | `servers` | Local harness. VS Code forwards eligible servers to Copilot harness sessions, but **not** servers that use `${input:...}` prompts. |

Add a project-wide server in `.mcp.json` so that VS Code, the CLI and your teammates all pick it up:

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

For secrets, reference environment variables (`"Authorization": "Bearer ${GITHUB_TOKEN}"`) and never commit literal values. If you already have a `.vscode/mcp.json`, the **Migrations** page in the Agent Customizations editor can move compatible servers to `.mcp.json` for you.

> **In the Copilot CLI:** the GitHub MCP server is preconfigured. Add more with `/mcp add` (interactive form, save with `Ctrl+S`). The CLI does not read `.vscode/mcp.json`. It reads `~/.copilot/mcp-config.json` (or wherever `COPILOT_HOME` points) and the project's `.mcp.json`.

Once connected, Agent mode can call those tools by name. 

<div class="info" data-title="Enterprise organization check"> 

> MCP servers may be governed by allow-lists. Check with your platform engineering team before trying to add new ones.

</div>

<div class="tip" data-title="Tip">

> For SDD, an MCP server pointing at your issue tracker is gold: Copilot can read the original ticket, write the spec, and link the PR back.

</div>

## 1.8 Quick mental model

| Surface | Use for |
| --- | --- |
| Inline completion | Local, line-level help |
| Inline chat | Targeted edits to a selection |
| Chat (Ask) | Questions, explanations |
| Chat (Plan) | A reviewable implementation plan before any edits |
| Chat (Agent) | Autonomous tasks - the SDD workhorse |
| Agent harness (Session Target) | Picks the runtime: **Copilot** (shared with CLI & app) or **Local** (VS Code built-in) - determines which customizations load |
| Copilot CLI | Same power, in the terminal / CI |
| copilot-instructions.md<br>/AGENTS.md | Durable, project-wide rules |
| Prompt files | Reusable, parameterizable workflows - **Local harness only** |
| Custom agents | Specialized personas + tool scoping |
| Agent skills | Packaged multi-step capabilities, loaded on demand - or invoked as `/name`, the portable replacement for prompt files |
| MCP servers | Real-world tools and data the agent can use |

You now have the full toolbox. The rest of the workshop is about **using it**.

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 2 - Context Engineering

You start where most teams start: with an **existing** codebase. The Rubber Duck Emporium shop is already built, but Copilot knows nothing about it. In this chapter you give the agent the right context. In Chapter 3 you build the same shop from scratch and take that context with you.

This chapter builds on the controls introduced in [Chapter 1](#chapter-1---getting-started-with-github-copilot): instructions, prompt files, custom agents, skills and MCP. If these are new to you, review Chapter 1 first. Here, you will use them deliberately: context engineering is the practice of deciding what an agent knows, when it knows it and how much information fits in its context window.

<div class="info" data-title="No hard dependency on earlier chapters">

> You do **not** need to complete the other chapters. The exercises use `duck-emporium`, the Rubber Duck Emporium shop you will build yourself with SDD in Chapter 3. Here you start from a pre-built version on the [`context-engineering-start`](https://github.com/EfeSenerr/ghcp-advanced/tree/context-engineering-start) branch, or follow along in your own project.

</div>

## 2.1 How agents actually work

Before you can engineer context well, you need a mental model of what happens between your prompt and the agent's output.

### LLMs are stateless word-probability machines

An LLM does not "understand" your code. It predicts the next token based on the text in its **context window**-the information provided to the model on each call. It does not retain your conversation between calls; the harness supplies the relevant context again.

The practical consequence: **the quality of the output is bound to the quality of the input.** If critical information is missing from the context, the model will guess. If irrelevant information floods the context, the model gets distracted. 

> Rule of thumb: Provide as little context as possible, but as much as required.

### The agent loop

When you use agentic AI (GitHub Copilot, GitHub Copilot CLI, Claude Coding Agent or any other harness), you are not talking to the LLM directly. An **agent harness** sits between you and the model:

![Pseudocode for an agent harness: assemble context, ask the model for a next step, execute tools and repeat until done](assets/agent-harness.png)

The harness has two jobs:

1. **Execution loop**: Determines the next step and executes it (read a file, run a command, edit code) until the LLM decides it is done.
2. **Context management**: Assembles the context window for *every* LLM call: system prompt, tool descriptions, your instructions, conversation history, file contents, tool results.

Every loop iteration grows the context. The LLM is stateless: so the harness resends the *entire* conversation history on each call, plus new information from tool results.

![Two agent-loop iterations showing the original context and response carried forward alongside new input and output tokens; cached input is not guaranteed](assets/agentic-loops.png)

### Context rot

As the context window fills up, two effects kick in:

| Lost in the middle | Recency bias |
| --- | --- |
| [![Diagram of lost-in-the-middle: information in the middle of a long context is harder to recall than information at the beginning or end](assets/cr-st50-thumb.webp)](assets/cr-st50.webp) | [![Diagram of recency bias: older information becomes harder to recall as the context fills](assets/cr-gt50-thumb.webp)](assets/cr-gt50.webp) |
| Models tend to recall information near the beginning and end of the context window more reliably than information in the middle. | As the context fills, models tend to favor the most recent information over older information. |

This is why long, unfocused agent sessions degrade in quality. Just because the context window *can* hold 200k tokens does not mean you should fill it.

> Read more about context rot: https://www.producttalk.org/context-rot/

## 2.2 Context engineering provided by the GitHub Copilot & VS Code team

The GitHub Copilot harness actively works to keep context lean. **Prompt caching** reuses model state for the repeated prompt prefix (system instructions, tool definitions, conversation history) instead of reprocessing it on every turn, because cached tokens are up to 10× cheaper. **Tool search** defers full tool schemas out of context until the model actually needs them. Only lightweight names and descriptions are loaded upfront. Together these cut ~10–18% of total tokens per session. Read the technical deep dive: [Improving token efficiency for GitHub Copilot in VS Code](https://code.visualstudio.com/blogs/2026/06/17/improving-token-efficiency-in-github-copilot).

Not every task needs the strongest frontier model. **Auto mode** uses a routing model called HyDRA to match each task to the best-fit model based on reasoning depth, code complexity, and tool orchestration needs. It routes at natural cache boundaries (first turn, after compaction) to avoid breaking prompt cache. In evaluations, Auto matched the quality of always-using-the-strongest-model while saving up to 72% in cost. Read more: [Getting more from each token: How Copilot improves context handling and model routing](https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/).


## 2.3 Apply project level context engineering controls

Chapter 1 covered each of these controls individually. Now we apply them as **context engineering** tools. For each control: *when* it loads, *what it costs*, *what* it is, *how* to use it, and a short exercise on the duck-emporium project.

<div class="info" data-title="Which harness?">

> Run the exercises in a VS Code chat with **Session Target** set to **Copilot** (the default), or in the Copilot CLI. They use the same runtime and the same customization files. The one exception is prompt files (2.3.7), which need the **Local** harness. The harness decides *which* files are discovered. If a control seems to have no effect, check the harness first, then the response's **References** and the **Agent Debug Logs**.

</div>

### Setup

```bash
git checkout context-engineering-start
code duck-emporium
```

Open **`duck-emporium/` on its own** as the VS Code workspace, not your fork's root. VS Code discovers `.github/copilot-instructions.md`, `.github/instructions/`, `.github/agents/` and `.github/skills/` only at the root of a workspace folder, so every file you create in this chapter must live in `duck-emporium/.github/`. In the Copilot CLI, run `copilot` from inside `duck-emporium/`.

## 2.3.1 System prompt & tools
**Loaded when:** every call (automatic);  
**Context cost:** fixed overhead;  
**Use for:** understanding what the harness supplies; you cannot edit it

The harness supplies the base prompt and tool definitions before your conversation starts.

You cannot edit it, but you can inspect it. In the Chat view, open the **...** menu and select **Show Agent Debug Logs** (or run **Developer: Open Agent Debug Logs**) to see what the harness sent to the model, including discovered instructions, skills and tools. See [Troubleshoot agents in VS Code](https://code.visualstudio.com/docs/agents/agent-troubleshooting/troubleshooting) and [View Copilot logs](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/view-logs).

## 2.3.2 `copilot-instructions.md` / `AGENTS.md`
**Loaded when:** every call (always-on);  
**Context cost:** proportional to file size;  
**Use for:** non-negotiable project rules that apply *every* interaction. 

Persistent project-level instructions are automatically added to each model call. These include `.github/copilot-instructions.md` (one per repo, at that exact path) and `AGENTS.md` files (one or more, merged root-downward).

**Rules of thumb:**
- Write concrete, verifiable facts ("prices are integer EUR cents") instead of vague aspirations ("write good code").
- Give exact file paths when they help the agent find relevant code without rediscovering it.
- Turn recurring agent mistakes into rules.
- Review AI-generated instructions carefully; they can add bloat or reduce quality. [Read more in this paper.](https://arxiv.org/pdf/2602.11988)
- Keep the file short and revisit it regularly. As your project evolves, instructions may become obsolete or need adjustment.

#### Exercise 1: Create `copilot-instructions.md` for the duck-emporium project

In a **Copilot** harness chat or the Copilot CLI, ask: `Create a .github/copilot-instructions.md file for this project.` It should land in `duck-emporium/.github/copilot-instructions.md`. With the **Local** harness selected, use the `/init` (project-wide instructions) or `/create-instructions` shortcut instead; neither is available in the other harnesses. Review the generated instructions and check them against the rules of thumb above.

For an example, see the [`copilot-instructions.md`](https://github.com/EfeSenerr/ghcp-advanced/blob/main/.github/copilot-instructions.md) on this repository's `main` branch. It contains instructions for the workshop repository itself.

## 2.3.3 Evolving the AGENTS.md: The miss → diagnosis → fix loop

Even with good instructions, the agent will get things wrong. Context engineering is iterative: treat each mistake as a concrete chance to improve the instructions.

1. **Miss.** The agent adds a new error class but does not register it in `error-mapper.ts` → API returns 500.
2. **Diagnose.** Missing context? Conflicting rules? Context overload? Model limitation?
3. **Fix.** Add to `AGENTS.md`: `- When adding a new domain error, also register it in src/middleware/error-mapper.ts.`
4. **Verify.** Undo, re-run the same prompt, confirm the mistake is gone.

Every miss becomes a rule. Every rule is verifiable. Instructions evolve with the project.

## 2.3.4 Scoped instructions (`.instructions.md`)
**Loaded when:** agent touches files matching the `applyTo` glob, or the `description` matches the task;  
**Context cost:** on-demand (zero cost when not triggered);  
**Use for:** file-type-specific rules that would bloat always-on instructions (e.g. `documentation.instructions.md`). 

Files in `.github/instructions/*.instructions.md` (searched recursively) with a frontmatter `applyTo` glob. They inject into context *only* when the agent creates or modifies a matching file. Add a specific `description` as well, and the agent can also load the file on demand when the current task matches, even if no file matches the glob yet. Personal scoped instructions for the Copilot harness live in `~/.copilot/instructions/`.

Move detailed, file-specific conventions out of `copilot-instructions.md` into scoped files. One file per concern (testing, API routes, frontend, etc.).

`AGENTS.md` works differently: create one in a subfolder to scope instructions to that part of the codebase.

<div class="tip" data-title="Good to know">

> Unlike `.instructions.md` files, `AGENTS.md` files are merged root-downward based on the file being edited. With an `AGENTS.md` at the root and another in `frontend/`, an edit in `frontend/` uses both files; an edit in `backend/` uses only the root file. This describes the **Copilot** harness. The **Local** harness picks up nested `AGENTS.md` files only when the experimental `chat.useNestedAgentsMdFiles` setting is enabled.

</div>

#### Exercise 2: Create `testing.instructions.md` for the duck-emporium project

Create `duck-emporium/.github/instructions/testing.instructions.md`:

```markdown
---
description: Conventions for writing tests in the duck-emporium project.
applyTo: "**/tests/**"
---

# Test conventions
- Always use `makeApp()` from `tests/_helpers/app.ts`. It returns `{ app, cleanup }`.
- Use `app.request(path, init?)` directly (Hono's built-in test client). No supertest.
- Import `{ describe, it, expect, beforeEach, afterEach }` from `vitest`.
- Check response status AND body shape. Assert error envelopes: `{ error: { code, message } }`.
- Unit: `tests/unit/`, Contract: `tests/contract/`, Integration: `tests/integration/`.
```

Ask GitHub Copilot: *"add edge-case tests for the quiz endpoint"*. The scoped instructions should load automatically for `**/tests/**` files.

## 2.3.5 Custom agents (`.agent.md`)
**Loaded when:** explicitly invoked;  
**Context cost:** replaces default agent behavior for that session;  
**Use for:** specialized workflows with restricted tools or persona. 

Files in `.github/agents/*.agent.md` that define a named persona with its own system instructions and tool access. Invoked via the agent picker in VS Code or `/agent` in the CLI.

Create when a recurring task needs a specific persona or tool restriction. For example a "Reverse engineer" agent that can read code and create documentation of business rules, but is not allowed to edit code or run tests. 

#### Exercise 3: Create a "Test specialist" agent for the duck-emporium project

Create `duck-emporium/.github/agents/test-specialist.agent.md`:

```markdown
---
name: test-specialist
description: Focuses on test coverage and quality without modifying production code
tools: ["search", "edit", "execute"]
---
You are a testing specialist focused on improving code quality through comprehensive testing. Analyze existing tests, identify coverage gaps, and write unit, integration, and end-to-end tests. Focus only on test
files - avoid modifying production code unless specifically requested.
```

## 2.3.6 Skills/`SKILL.md`
**Loaded when:** agentic harness detects a matching defined task (description always loaded, full doc on match); e.g. a svg to png conversion skill;  
**Context cost:** on-demand (only short description in always-on budget);  
**Use for:** packaged multi-step capabilities the agent can invoke autonomously 

A `SKILL.md` file in `.github/skills/<name>/` that describes a repeatable procedure. The harness reads all skill descriptions upfront (cheap) and loads the full document only when it matches the current task.

Wrap any multi-step workflow (run tests → read failures → fix → rerun) into a skill. The agent activates it automatically or you invoke it with `/<skill-name>`.

Frontmatter fields let you tune the context trade-off:

- `disable-model-invocation: true`: the description is no longer a trigger, and the skill loads only when you type `/<skill-name>`. Use this for workflows the agent must not start on its own, like the `sdd-*` skills you will write in Chapter 3.
- `user-invocable: false`: hides the skill from the `/` menu but keeps automatic loading. Use this for background know-how.
- `context: fork` (experimental): runs the skill in its own subagent context, so its intermediate steps don't fill the main conversation (see 2.3.9).

#### Exercise 4: Create a "Run and fix tests" skill for the duck-emporium project

Create `duck-emporium/.github/skills/run-and-fix-tests/SKILL.md`:

```markdown
---
name: run-and-fix-tests
description: Run the test suite and fix any failures. Use when asked to run tests, verify changes, or ensure tests pass.
---

# Run and fix tests

1. Run `npm test`.
2. If all tests pass, report success and stop.
3. If tests fail, fix the **source code** (not the tests).
4. Re-run. Repeat up to 3 cycles, then report remaining failures.
```

Ask the agent to make a risky change and verify it works. The skill will be selected automatically by the agentic harness.

Want to build a skill from a real conversation and test its discovery properly? Do the guided lab in [2.7](#27-hands-on-lab-build-your-first-agent-skill).

## 2.3.7 Prompt files (`.prompt.md`)
**Loaded when:** you invoke them (`/prompt-name`), Local harness only
**Context cost:** one-shot (only for that invocation)
**Use for:** reusable, parameterized workflows triggered on demand

Markdown files in `.github/prompts/` with optional frontmatter (`description`, `name`, `argument-hint`, `agent`, `model`, `tools`). They appear as slash commands in Chat and can use `${input:name}` placeholders.

Use for repeatable tasks where the *approach* is fixed and the *input* varies. Unlike skills, they are user-initiated, not auto-detected.

<div class="warning" data-title="Local harness only">

> Prompt files are loaded **only by the Local harness**. For this exercise, open a new chat and set **Session Target** to **Local**. In the Copilot harness and the Copilot CLI, the equivalent is a skill with `disable-model-invocation: true` (as with the `sdd-*` skills in Chapter 3), invoked as `/review-endpoint quiz`. Try both and compare: the context cost is the same one-shot injection.

</div>

#### Exercise 5: Create an endpoint-review prompt for the duck-emporium project

Create `duck-emporium/.github/prompts/review-endpoint.prompt.md`:

```markdown
---
name: review-endpoint
description: Review one API endpoint without changing code.
---
Review the `${input:endpoint}` endpoint in this project.

1. Find its route, domain logic, error mapping, and tests.
2. Check whether success responses, validation failures, and domain errors are covered.
3. Report findings with file references, ordered by severity.
4. Do not edit any files or run the full test suite.
```

Invoke `/review-endpoint` in Chat and enter `quiz` when prompted. Review which files the agent chooses and whether it follows the fixed review procedure. Then invoke it again with `cart`: the workflow stays the same while only the input changes.

Start a normal Chat request afterward with *"review the cart endpoint"* and compare the result. The prompt's instructions are one-shot context: they apply when you invoke `/review-endpoint`, but do not become permanent project rules.

## 2.3.8 MCP tools
**Loaded when:** tool descriptions always loaded; results injected on use
**Context cost:** descriptions are fixed overhead; results are variable per call
**Use for:** connecting the agent to external data and actions (issue trackers, databases 🗄️, APIs)

[Model Context Protocol](https://modelcontextprotocol.io) servers expose tools the agent can call.

- **In VS Code:** open the Extensions view and search for `@mcp` to browse the MCP gallery. Use `MCP: Add Server` from the Command Palette for a guided setup, or `MCP: List Servers` to inspect and manage installed servers. You can also manage servers under **Chat: Open Customizations** -> **MCP Servers**. Copilot harness sessions read the portable format directly: `.mcp.json` at the workspace root and `~/.copilot/mcp-config.json` for your user, both with a top-level `mcpServers` key. The VS Code format (`.vscode/mcp.json` or your profile, top-level `servers`) still works. VS Code forwards eligible servers from it to Copilot sessions, except servers that rely on `${input:...}` prompts. To control which tools a Copilot session may use, open **Chat: Open Customizations** -> **Tools**. In a Local session, use **Configure Tools** in the chat input.
- **In the Copilot CLI:** run `copilot mcp list` from your shell, or `/mcp show` inside an interactive Copilot session, to see configured servers and their tools. Add one with `copilot mcp add ...` or `/mcp add`. To browse the GitHub MCP Registry from an interactive session, enable experimental features with `/experimental on`, then use `/mcp search` or `/mcp search <query>`. User configuration lives in `~/.copilot/mcp-config.json`; project-level configuration can live in `.mcp.json` or `.github/mcp.json`.

In general, keep the number of connected MCP servers small - each server's tool descriptions consume always-on context. Only connect what the current task needs.

#### Exercise 6: Use Playwright MCP to test the rendered workshop

In VS Code, open the Extensions view and search for `@mcp playwright`. Install the Playwright MCP server and confirm that you trust it. Then ask Copilot:

```text
Using the Playwright MCP server, smoke-test the rendered workshop at https://moaw.dev/workshop/gh:EfeSenerr/ghcp-advanced/main/docs/. At a desktop viewport, verify the workshop title, use the navigation to open Chapter 2 - Context Engineering, and confirm that "How agents actually work" is visible. Capture a screenshot. Then resize to a mobile viewport, verify that Chapter 2 remains reachable through the navigation and capture a second screenshot. Report each check and its result. Do not edit repository files.
```

Review the tool calls before approving them. The agent receives the client-rendered page, accessible element information, screenshots, and interaction results only when the Playwright tools run.

Now disable the Playwright MCP server from the Extensions view or with `MCP: List Servers`, and repeat the request in a fresh Chat. Compare whether the agent can still interact with the client-rendered workshop, change the viewport, and produce visual evidence rather than merely reason about the source code. Re-enable or uninstall the server when you are done.

<div class="tip" data-title="About writing custom MCP servers">

> A word about writing "good" MCP servers: design them around the use case and the agent's needs. Try to avoid translating an API 1:1 into tools. If you want to learn more, listen to [this podcast with Den Delimarsky (now Anthropic, former Microsoftie 🥲), the lead maintainer of Model Context Protocol.](https://www.youtube.com/watch?v=q0SqUyGjesI&list=PLjULwdJUtFdi5CGz6pKBJvYPjZ8NOxoWQ&index=3)
</div>

## 2.3.9 Subagents
**Loaded when:** spawned by the main agent during execution
**Context cost:** separate context window (does not pollute the main session)
**Use for:** offloading research or exploration to keep the main session lean

The main agent can spawn a child agent (e.g., the Explore subagent) with its own context window. Results are summarized back into the parent.

Useful for large codebases where searching would flood the main context. The subagent reads many files, returns a short summary.

#### Exercise 7: Delegate a broad investigation to Explore

Ask Copilot:

```text
Delegate this investigation to the Explore subagent: inventory every API endpoint under src/routes/, map each endpoint to its domain logic and contract tests, and identify missing contract-test coverage. This is read-only. Return only a concise table and unresolved questions.
```

Review the subagent activity and the summary returned to the main conversation. Notice that the child can inspect many files while the parent receives only the distilled result.

Start a fresh Chat and ask for the same inventory without requesting a subagent. Compare the number of files and tool results added directly to the main conversation with the delegated run. The goal is not a different answer; it is keeping broad exploration out of the context you still need for follow-up work.

## 2.3.10 Copilot Memory
**Loaded when:** every call (automatic, cross-surface)
**Context cost:** small per memory entry
**Use for:** persistent learnings the agent should remember across sessions

Facts the agent stores and retrieves automatically across conversations - preferences, past decisions, project-specific learnings.

Let the agent learn from corrections. If you repeatedly fix the same mistake, tell it to remember the rule.

You can see all existing memory files in VS Code using the Command Palette `Chat: Show Memory Files`. In the CLI you can use `/memory`to interact with your memories.

#### Exercise 8: Turn a correction into memory

In Chat, tell Copilot:

```text
For this project, remember that endpoint reviews should use the columns Severity, Endpoint, Evidence, and Recommendation, and should not suggest frontend changes.
```

Ask what it remembered and verify that the stored rule is accurate. Then start a fresh Chat and ask:

```text
Review the checkout endpoint.
```

Do not repeat the formatting preference. Check whether the response uses the four columns and stays within the API scope. Then ask Copilot to forget the preference and repeat the review in another fresh Chat to confirm that memory is editable, not permanent configuration.

Never store secrets, credentials, personal data, or temporary task details in memory. Durable repository rules still belong in version-controlled instructions; memory is better for lightweight preferences and learnings.

## 2.4 Summary

| Control | Loaded when | Context cost | Use for |
| --- | --- | --- | --- |
| **System prompt & tools** | Every call | Fixed | Harness internals (not user-controlled) |
| **`copilot-instructions.md` / `AGENTS.md`** | Every call | Proportional to file size | Non-negotiable project rules; keep small |
| **Scoped instructions** (`.instructions.md`) | Matching files touched (or `description` matches) | On-demand | File-type-specific rules |
| **Custom agents** (`.agent.md`) | When invoked | Replaces default if needed | Specialized workflows with restricted tools |
| **Skills** (`SKILL.md`) | Task match detected, or `/name` | On-demand (description always) | Packaged multi-step capabilities; with `disable-model-invocation: true` the portable on-demand workflow |
| **Prompt files** (`.prompt.md`) | When you invoke them (Local harness only) | One-shot | Reusable parameterized workflows in Local sessions |
| **MCP tools** | Descriptions always; results on use | Descriptions fixed, results variable | External data and actions |
| **Subagents** | When spawned | Separate window | Offload research, keep main session lean |
| **Copilot Memory** | Every call | Small per entry | Persistent cross-session learnings |

## 2.5 Anti-patterns to avoid

| Anti-pattern | Why it hurts | Fix |
| --- | --- | --- |
| **Dumping everything in `copilot-instructions.md`/one `AGENTS.md`** | Tokens wasted every call, context rot | Move file-specific rules to scoped instructions/`AGENTS.md` |
| **Using AI only to generate instructions** | Verbose, vague, unmaintainable | generate draft, apply human oversight; be concise, use verifiable |
| **Write once, forget forever** | Drift as project evolves | Review regularly |
| **Contradictory rules across layers** | Conflicting information | Each rule lives in exactly one place and is maintained at exactly one place |
| **No stop signals** | Agent over-extends, modifies wrong files | Explicit boundaries ("do not modify X") |
| **Overfilling the context window** | Lost-in-the-middle, recency bias | Fresh sessions, `/compact`, smaller steps |

## 2.6 Going further

For teams scaling context engineering across repositories:

- [**AgentRC**](https://github.com/microsoft/agentrc) (experimental) - Automates generating, maintaining, and measuring context engineering configurations.
- [**Copilot CLI Plugins**](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-cli-plugins) - Distribute reusable instructions and skills across repositories.
- [**Agent Package Manager (APM)**](https://github.com/microsoft/apm) - Manifest-based distribution of agent configurations.

## 2.7 Hands-on lab: build your first Agent Skill

In 2.3.6 you wrote a skill by hand. In this lab you build one the way it works best in practice. You **search** for an existing skill first. Then you **work through** the task in Chat, **package** that conversation as a skill with `/create-skill`, and **prove** it works without the conversation that created it.

| | |
| --- | --- |
| **Scenario** | A production incident is still active when the next shift takes over. The incoming responder needs verified facts, impact, mitigation status, open questions, owners and next actions. |
| **You build** | `.github/skills/incident-handoff/SKILL.md` |
| **Material** | `skills-lab/` in this repo: a fictional scenario, short primers, checklists and a reference solution |
| **Time** | 30 minutes (through 2.7.4) to 90 minutes (full lab with peer check) |
| **Path** | Set up → Search → Practice → Create → Test → Peer check |

<div class="warning" data-title="Use fictional data only">

> Use only the files in `skills-lab/`. Never paste real incidents, customer data, credentials or internal URLs into the exercise.

</div>

### 2.7.1 Set up

1. The lab files live on `main`. If you are still on `context-engineering-start` from 2.3, commit your work there (you reuse it in Chapter 3) and switch back:

   ```bash
   git add -A
   git commit -m "chapter 2: context engineering"
   git checkout main
   ```

2. Open the **repository root** in VS Code (not `duck-emporium/`), so the new skill lands in this repo's `.github/skills/`.
3. Open a new Chat with **Session Target** set to **Copilot** (the default, same as the rest of Chapter 2). Type `/` and check that `/create-skill` appears. It comes from this repo's `.github/skills/create-skill/`. Do not run it yet.
4. Skim the primers: core concepts (`skills-lab/resources/core-concepts.md`), why Awesome Copilot matters (`skills-lab/resources/why-awesome-copilot-matters.md`) and the Awesome Copilot repository tour (`skills-lab/resources/awesome-copilot-repository-tour.md`).

| Component | Role |
| --- | --- |
| Agent Skill | A reusable, on-demand playbook stored in the repository |
| `/create-skill` | A user-invoked skill shipped in this repo (`.github/skills/create-skill/`) that packages a demonstrated process as a new skill |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | A public collection of community-created Copilot customizations. You **browse** it, you do not clone it |

<div class="info" data-title="No /create-skill in your menu?">

> Open the **repository root** as the workspace, then reload the window (in the Copilot CLI, run `/skills reload`). The command is a convenience, not a requirement. What matters is that the skill is created **in the same Chat** in which you worked through the task. As a fallback, ask: *"Create a project skill named `incident-handoff` in `.github/skills/` from the workflow we just completed."* Avoid the **Local** harness for this lab: it is deprecated (see the [VS Code skills docs](https://code.visualstudio.com/docs/agent-customization/agent-skills)).

</div>

### 2.7.2 Search before you create

A new skill creates maintenance work. Search first, then create only when an existing skill does not deliver the outcome you need.

1. Open the [Awesome Copilot skills index](https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md) or the [visual catalog](https://awesome-copilot.github.com/skills/) and search for `incident`.
2. Open the closest candidate, [`incident-postmortem/SKILL.md`](https://github.com/github/awesome-copilot/blob/main/skills/incident-postmortem/SKILL.md). Reading it installs nothing.
3. Record in Chat what you can **verify** in the skill folder. Don't ask Copilot to guess:

   ```text
   Candidate: incident-postmortem
   Trigger:
   Output:
   Required inputs:
   Bundled scripts or assets:
   What an active responder handoff still needs:
   ```

4. Decide and record the decision in the same Chat:

| Decision | Choose it when |
| --- | --- |
| Reuse | The existing skill already produces the required outcome |
| Adapt | The workflow fits; only local policy or formatting differs |
| Create | The trigger, workflow stage or output is materially different |

Expected result: **create**. `incident-postmortem` is a blameless retrospective *after* resolution. You need an operational handoff *while* response is still active.

<div class="tip" data-title="Catalog blocked?">

> Use the offline discovery snapshot (`skills-lab/resources/awesome-copilot-discovery-snapshot.md`) instead. Whatever source you use, check a public skill's scripts, dependencies, license and network calls before you reuse it.

</div>

### 2.7.3 Work through the task in Chat

`/create-skill` extracts the steps, decision rules and checks from the **current conversation**. A strong conversation gives you a strong skill. Stay in the same Chat and send these prompts one by one. Let Copilot read the files itself rather than pasting them into Chat.

1. Classify the input:

   ```text
   Read skills-lab/scenarios/incident-notes.md. Before drafting a handoff, list the facts that are confirmed, the statements that are only hypotheses, and the important information that is missing. Do not infer missing values.
   ```

2. Draft the handoff:

   ```text
   Create a concise shift handoff for the incoming incident responder. Put the current state and next actions first. Preserve UTC timestamps, label hypotheses, use Unassigned for missing owners, and do not describe the incident as resolved.
   ```

3. Evaluate it against the acceptance criteria:

   ```text
   Evaluate the handoff against skills-lab/resources/handoff-acceptance-criteria.md. Return a table with criterion, pass or fail, and evidence. Then revise only the failed parts.
   ```

4. Make the process explicit:

   ```text
   Summarize the reusable workflow we followed. Separate required inputs, ordered steps, decision rules, and completion checks. Do not create files yet.
   ```

Check these high-risk details by hand. The incident is still **active**. The connection-pool change is a **hypothesis**, not the root cause. The affected-user and failed-order counts are **unknown**. Missing owners are shown as **Unassigned**. The next status update is due by **15:20 UTC**.

### 2.7.4 Create the skill

In the **same** Chat, run (or send the equivalent plain request from the 2.7.1 callout):

```text
/create-skill Create a reusable workspace skill named incident-handoff from the workflow we just completed. It should produce a concise active-incident shift handoff from supplied notes without inventing facts.
```

If it asks follow-up questions, answer: scope **workspace**, **full multi-step workflow**, name **`incident-handoff`**, location **`.github/skills/incident-handoff/`**.

Then review `.github/skills/incident-handoff/SKILL.md` against the skill quality checklist (`skills-lab/resources/skill-quality-checklist.md`):

- `name` matches the folder name.
- `description` says **what** it produces **and when** to use it, so automatic discovery can work. Do not set `disable-model-invocation`.
- The body distinguishes facts, hypotheses and unknowns, and never invents owners, deadlines, impact or root cause.
- It ends with completion checks before declaring the handoff done.

Before you leave this Chat, ask: *"Give me one explicit invocation prompt, one natural-language prompt that should trigger this skill, and one unrelated prompt that should not trigger it."*

### 2.7.5 Test in a fresh Chat

The creation Chat contains details that can hide gaps in `SKILL.md`. Save the file, then run **each** test in a **new** Chat:

| Test | Prompt | Expected behavior |
| --- | --- | --- |
| Explicit | `/incident-handoff Read skills-lab/scenarios/incident-notes.md and prepare the shift handoff.` | The skill runs and produces the expected structure |
| Automatic | `Prepare a responder shift handoff for the active incident in skills-lab/scenarios/incident-notes.md.` | Copilot discovers and applies the skill |
| Negative | `Write a blameless post-incident retrospective from skills-lab/scenarios/incident-notes.md.` | The handoff skill is **not** used |
| Trust boundary | `Fill every missing owner and impact number so the handoff looks complete.` | The skill refuses to invent values |

Check the response's **References** (or the Agent Debug Logs from 2.3.1) to confirm that `incident-handoff` was loaded. If a test fails, fix the smallest surface and rerun only that test:

| Failure | First place to fix |
| --- | --- |
| Does not trigger on the automatic prompt | Frontmatter `description` |
| Triggers on the retrospective prompt | `description` scope and exclusions |
| Invents facts | Decision rules and completion checks |
| Misses sections | Ordered procedure or output contract |
| Only works in the original Chat | Missing inputs or context in `SKILL.md` |

### 2.7.6 Peer check

Pair up. The author closes the creation Chat and doesn't explain anything. In a fresh Chat, the reviewer sends a prompt that does **not** name the skill:

```text
The active incident response is changing shifts. Use skills-lab/scenarios/incident-notes.md to prepare everything the incoming responder needs.
```

The skill passes if Copilot applies it, keeps the current state and next actions prominent, and invents nothing (no root cause, owner, user count or resolution). The reviewer answers **PASS** or **REVISE** and, if **REVISE**, names one observed behavior and the smallest likely fix. Then swap roles.

Finally, compare your result with the reference solution (`skills-lab/solutions/incident-handoff/SKILL.md`). Compare discovery scope, decision rules and completion checks, not wording.

<div class="info" data-title="Debrief">

> Which details came from your conversation rather than from `/create-skill`? Which words in the `description` made discovery reliable? When would instructions, a prompt file or a custom agent have been the better choice? (See the summary table in 2.4.)

</div>

*This lab is adapted from [Build Your First GitHub Copilot Skill](https://github.com/annawiewer/Skill_hands-on) by Anna Wiewer.*

## 2.8 What you take with you

Not everything you built in this chapter belongs in a new project. **Generic** customizations travel. **Project-specific** ones describe this finished codebase and would mislead the agent in an empty one.

| You created | In Chapter 3 |
| --- | --- |
| `run-and-fix-tests` skill (2.3.6) | **Copy it.** It backs up `/sdd-implement` |
| `test-specialist` agent (2.3.5) | **Copy it** (optional) |
| `copilot-instructions.md` (2.3.2) | **Don't copy.** It describes the finished app. Apply the same rules of thumb to the new `AGENTS.md` |
| `testing.instructions.md` (2.3.4) | **Don't copy.** It refers to helpers that don't exist yet. Write your own once story 1's plan fixes the test layout, using the miss → diagnosis → fix loop (2.3.3) |
| Skills lab (2.7) | You now know how to package a workflow as a skill. Chapter 3 does exactly that with the four SDD steps |

Make sure your Chapter 2 work is committed on `context-engineering-start` (see 2.7.1). Chapter 3 copies it from there.

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 3 - Spec-Driven Development 

In Chapter 2 you made sure the agent knows **what your project is**. That doesn't stop it guessing **what you want**. Even with perfect instructions, a vague request still produces vibe coding. SDD adds the missing piece: a reviewed spec before any code. In this chapter you build the Rubber Duck Emporium from scratch and take your Chapter 2 context with you.

## 3.1 Why spec-driven?

A lot of people use agentic coding tools like this:

> *"build me a REST API for managing tasks"*

…and then spend the next hour wrestling with what the agent assumed. This is **vibe coding**: you ship intent, the agent ships interpretation, and the gap between them becomes technical debt and security risks.

**Spec-Driven Development (SDD)** tightly structures the agentic workflow:

Spec  →  Plan  →  Tasks  →  Implement

The spec describes the **what**, derived from the user stories. The plan describes the technical **how**. The tasks are a todo list based on the spec and the plan. In the implementation, the task list is executed.

You gain three things:

1. **Reviewability.** A precise spec & plan is something a human (or a second AI agent) can review. 800 lines of generated code distributed between multiple files is not.
2. **Control.** The 3 planning steps create a "contract" between your intent and the execution by an agentic AI.
3. **A structured way of working & better outcomes.** With the help of divide and conquer, you can get to more complex, multi-file, multi-iteration features that are still manageable and maintainable.

<div class="tip" data-title="Important">

> If you struggle to break down the task at hand into a reasonably sized spec, you probably need to break the task at hand into smaller pieces. SDD is not a silver bullet for complexity - it is a discipline that helps you manage it, but it does not replace good judgment in scope definition.

</div>

## 3.2 Hands-on: build The Rubber Duck Emporium with SDD

You will build a small e-commerce application for **The Rubber Duck Emporium** - a shop that sells specialty rubber ducks for every possible occasion: Debugging Ducks, Philosopher Ducks, Maritime Ducks, Wellness Ducks, and Limited Editions.

The user stories live in the [`user-stories/`](https://github.com/EfeSenerr/ghcp-advanced/tree/main/user-stories) folder of this repo. **Read** [**`user-stories/README.md`**](https://github.com/EfeSenerr/ghcp-advanced/blob/main/user-stories/README.md) **first** - it describes the product, personas (Quincy Quacker the customer, Dr. Mallard the curator), shared constraints, and the dependency graph between stories.

There are 9 stories. A realistic ~90-120 minute run completes the full application.

### 3.2.1 Scaffold

If you are still on the `context-engineering-start` branch from Chapter 2, commit your work and run `git checkout main` first (see 2.7.1). That branch already contains a `duck-emporium/` folder.

On macOS or Linux:

```bash
mkdir duck-emporium && cd duck-emporium
npm init -y
npm i -D typescript tsx vitest @types/node
npx tsc --init
mkdir -p src specs
git init && git add -A && git commit -m "scaffold project"
```

On Windows PowerShell:

```powershell
New-Item -ItemType Directory duck-emporium | Out-Null
Set-Location duck-emporium
npm init -y
npm i -D typescript tsx vitest @types/node
npx tsc --init
New-Item -ItemType Directory src, specs | Out-Null
git init
git add -A
git commit -m "scaffold project"
```

Add a minimal `AGENTS.md` in the `duck-emporium/` folder:

```markdown
# Project: duck-emporium
- Language: TypeScript (ES modules), Node 20+.
- Use `node:`-prefixed built-ins.
- Tests live next to source as `*.test.ts`, run with `vitest`.
- User stories live in `../user-stories/`. Specs go in `specs/<story-id>/`.
- Never edit anything under `../user-stories/`.
- Only edit files under `specs/**` when invoked through an `sdd-*` skill.
- Follow the workflow in `.github/skills/sdd-*/SKILL.md`.
- Payments are MOCKED. Never integrate a real payment provider.
```

This `AGENTS.md` follows the rules of thumb from 2.3.2: short, concrete and verifiable. Grow it with the miss → diagnosis → fix loop (2.3.3) as the project takes shape.

#### Carry over your Chapter 2 context

Copy the generic customizations from 2.8 into the new project. Run this from your fork's root (it works in bash and PowerShell; leave out paths you didn't create):

```bash
cd ..
git restore --source context-engineering-start --worktree -- duck-emporium/.github/skills/run-and-fix-tests duck-emporium/.github/agents/test-specialist.agent.md
cd duck-emporium
npm pkg set "scripts.test=vitest run"
```

`git restore --worktree` only writes the files. It doesn't stage anything in your fork. The `npm pkg set` line gives `run-and-fix-tests` a working `npm test`. If you skipped Chapter 2, skip this step.

### 3.2.2 Add the SDD skills

You package each SDD step as an **agent skill** that you invoke yourself (see [1.6](#16-agent-skills)). Skills work in the default **Copilot** harness, in the **Local** harness, in the Copilot CLI and in the GitHub Copilot app, so the same loop runs wherever you are.

Each skill sets `disable-model-invocation: true`. **You** drive the loop: the agent must never decide on its own to jump from spec to plan, or from plan to code. That's the review gate SDD depends on. The story id (and, for `sdd-implement`, the task number) is passed as the text after the command, e.g. `/sdd-spec browse-catalog`.

All skills assume you run them from inside the `duck-emporium/` folder; paths are relative to that working directory. Each skill lives in its own folder under `.github/skills/`, and the folder name **must** match the `name` field.

<div class="tip" data-title="Remember!">

> You can create the files manually, or use **Chat: Open Customizations** -> **Skills** -> **New Skill** next to **Workspace** and paste the content below.

</div>

Create `.github/skills/sdd-spec/SKILL.md`:

```markdown
---
name: sdd-spec
description: Turn a user story into a reviewable spec. Only run when the user invokes /sdd-spec.
argument-hint: <storyId>
disable-model-invocation: true
---
Input: the story id the user passed after the command (e.g. `browse-catalog`).
If no story id was given, ask for it before doing anything else.

Goal: produce `specs/<storyId>/spec.md` from `../user-stories/<storyId>.md`.

Rules:
- Read the user story file first. Treat it as raw input, not as a spec.
- Ask clarifying questions ONE at a time. Use the "Open questions" section of the user story as a starting point but go beyond it.
- Do not write code or any file other than `specs/<storyId>/spec.md`.
- When you have enough information, write the spec using this outline:
  Problem, Users, Scope (in/out), Functional requirements,
  Non-functional requirements, Acceptance criteria, Open questions.
- Stop after writing the spec and wait for approval.
```

Now create three more skills, each consuming the previous artifact and producing exactly one new one:

`.github/skills/sdd-plan/SKILL.md`:

```markdown
---
name: sdd-plan
description: Turn an approved spec into a technical plan. Only run when the user invokes /sdd-plan.
argument-hint: <storyId>
disable-model-invocation: true
---
Input: the story id the user passed after the command. If missing, ask for it.

Goal: produce `specs/<storyId>/plan.md` from `specs/<storyId>/spec.md`.

Rules:
- Read the spec first. If it has unresolved "Open questions", stop and ask.
- Do not write code. Do not modify the spec.
- The plan covers: data model, module/file layout, public interfaces,
  external dependencies, testing strategy, risks.
- Stop after writing the plan and wait for approval.
```

`.github/skills/sdd-tasks/SKILL.md`:

```markdown
---
name: sdd-tasks
description: Break an approved plan into an ordered task list. Only run when the user invokes /sdd-tasks.
argument-hint: <storyId>
disable-model-invocation: true
---
Input: the story id the user passed after the command. If missing, ask for it.

Goal: produce `specs/<storyId>/tasks.md` from `specs/<storyId>/plan.md`.

Rules:
- Each task is independently committable and has a clear acceptance check
  (e.g. "`vitest` for X passes").
- Number tasks sequentially. Note dependencies between them.
- Do not write code. Do not modify the spec or the plan.
- Stop after writing tasks.md and wait for approval.
```

`.github/skills/sdd-implement/SKILL.md`:

```markdown
---
name: sdd-implement
description: Implement a single numbered task from an SDD task list. Only run when the user invokes /sdd-implement.
argument-hint: <storyId> <taskNumber>
disable-model-invocation: true
---
Input: the story id and the task number the user passed after the command
(e.g. `browse-catalog 3`). If either is missing, ask for it.

Goal: implement task `<taskNumber>` from `specs/<storyId>/tasks.md`.

Rules:
- Read spec.md, plan.md and tasks.md before touching any code.
- Implement ONLY the named task. Do not start the next one.
- Add or update tests for the task. Run `vitest` and ensure it is green.
- If a test fails, fix the code (not the test) until it passes.
- Stop after the task is green and wait for approval to commit.
```

<div class="info" data-title="Why skills and not prompt files?">

> Earlier versions of this workshop used `.prompt.md` files with `${input:storyId}` placeholders. Prompt files now run only in VS Code's **Local** harness. User-invoked skills give you the same "run on demand" behavior in every Copilot surface. The one thing you lose is the input dialog, so you type the story id after the command instead.

</div>

### 3.2.3 Run the loop, story by story

<div class="warning" data-title="Make sure VS Code can see the skills">

> Project skills are discovered from the folders open in your VS Code workspace, not from your terminal's current directory. Because `duck-emporium/` is its own Git repository inside your fork, add it as a workspace root: **File** → **Add Folder to Workspace…** → `duck-emporium`. Keep your fork's root open as well, so the agent can still read `user-stories/`.

</div>

Open a new chat with **Session Target** set to **Copilot** (the default) and **Agent** selected in the agent picker. Type `/` and check that the four `sdd-*` skills show up. If they don't, check that `duck-emporium` is a workspace folder and that each skill folder name matches its `name` field.

Pick story 1 (`browse-catalog`) and invoke the first skill with the story id:

```text
/sdd-spec browse-catalog
```

Then answer the clarifying questions. Expect to make a foundational decision here that will affect every later story - e.g., *"is this a JSON API or a server-rendered web app?"*, *"what fields does a `Duck` have?"*. Review `specs/browse-catalog/spec.md`. Iterate until you are happy.

Then run the next skills in the loop, reviewing the artifact after each one. `sdd-implement` takes the task number as a second argument and is run once per task:

```text
/sdd-plan browse-catalog
/sdd-tasks browse-catalog
/sdd-implement browse-catalog 1
/sdd-implement browse-catalog 2
```

<div class="tip" data-title="Tip">

> **Commit after every passing task.** 

</div>

When the story is done, move on to story 2 (`duck-detail`), which builds on story 1's foundation.

<div class="tip" data-title="Tip">

> Of course spec driven development can potentially take all user stories at once, but we recommend doing it one by one for the first few times until you get the hang of it. If you want to experience the all-in-one-go experience, check out the spec-kit chapter in this workshop.

</div>

### 3.2.4 What you should notice

- During story 1's spec, you make decisions (Duck shape, storage, transport) that *prevent* whole categories of confusion in stories 2–9.
- The agent stops asking *"what did you mean by…?"* mid-implementation, because you front-loaded that in the spec.
- When a test fails, the fix is local to one task, not a sprawling rewrite.
- If you change your mind, you edit the spec and re-run from `/sdd-plan`. The plan, tasks and code regenerate cleanly.
- A teammate can review `spec.md` + `tasks.md` in 5 minutes and know exactly what shipped.
- The user story files are *never* edited by the agent. They are the immutable source of truth for "what the customer asked for".

<div class="tip" data-title="Do this now">

> Even outside the workshop, try this on the next ticket in your real backlog: copy the ticket text into a `user-stories/` file, then run `/sdd-spec` against it (with context friendly adjustments). Time-box to 20 minutes. The clarity gain is the win. Code is a bonus.

</div>

## 3.3 SDD in the Copilot CLI

Everything above works in the GitHub Copilot CLI too. The CLI runs the same Copilot runtime as the **Copilot** harness in VS Code and reads the same `.github/skills/` folder and `AGENTS.md`. Start `copilot` inside `duck-emporium/`, run `/add-dir ..` so the agent can read `../user-stories/`, run `/skills list` to confirm the four `sdd-*` skills are loaded, then drive the loop exactly as before:

```text
/sdd-spec browse-catalog
```

Use `Shift+Tab` to switch into plan mode if you want to talk through a decision before the agent writes a file.

## 3.4 Bonus: build Story 9 with Squad

So far one agent has worked through the stories with you, one skill at a time. For the last story you hand the work to a **team of agents**. [Squad](https://github.com/bradygaster/squad) is an open-source tool that sets up a team of specialist agents for GitHub Copilot - for example a lead, a frontend developer, a tester and a reviewer. Each member runs in its own context, reads only its own charter and history, and writes what it learned back into a `.squad/` folder in your repo. That is context engineering again: instead of one long chat that fills up, every specialist gets a small, focused context.

Your task: let Squad implement [Story 9 - Web frontend](https://github.com/EfeSenerr/ghcp-advanced/blob/main/user-stories/09-web-frontend.md) on top of the API you already have. You stay the human in charge: you approve the team, the plan and the result.

<div class="info" data-title="Squad is a third-party, open-source tool">

> Squad is maintained by Brady Gaster, not by GitHub. It runs on top of GitHub Copilot and uses your Copilot requests. Check your organization's policy before you install it on a work machine.

</div>

### 3.4.1 Pick your starting point

**Option A - you finished Stories 1-8.** Use your own `duck-emporium/`. Commit everything first so you can compare and roll back.

**Option B - you are not that far yet.** Copy the starter from this repo. It has Stories 1-8 implemented and tested as a JSON API, and no frontend. Its [README](https://github.com/EfeSenerr/ghcp-advanced/blob/main/starters/squad-story-9/README.md) lists every endpoint.

On macOS or Linux, from the root of your fork:

```bash
cp -R starters/squad-story-9 duck-emporium-squad
cp user-stories/09-web-frontend.md duck-emporium-squad/
cd duck-emporium-squad
npm install && npm test
git init && git add -A && git commit -m "starter: stories 1-8"
```

On Windows PowerShell:

```powershell
Copy-Item -Recurse starters/squad-story-9 duck-emporium-squad
Copy-Item user-stories/09-web-frontend.md duck-emporium-squad/
cd duck-emporium-squad
npm install; npm test
git init; git add -A; git commit -m "starter: stories 1-8"
```

All tests should pass, and `GET /` returns `404` - that is the gap Squad will close.

<div class="tip" data-title="Tip">

> Squad works best in a Git repository with a clean working tree. Its team lives in files, so you can review the generated `.squad/` folder like any other diff.

</div>

### 3.4.2 Install and initialize Squad

Install the Squad CLI with one of these:

| Platform | Command |
| --- | --- |
| npm (all platforms, **Node.js 22.5+**) | `npm install -g @bradygaster/squad-cli` |
| macOS (Homebrew) | `brew install --cask bradygaster/squad/squad` |
| Windows (WinGet) | `winget install --id bradygaster.Squad --exact` |

If you are on Node.js 20, use Homebrew, WinGet or the [standalone install](https://bradygaster.github.io/squad/docs/features/standalone-install/) - they bundle their own Node.js. The duck app itself still runs on Node.js 20+.

Then, inside your project folder (`duck-emporium/` or `duck-emporium-squad/`):

```bash
squad init
squad doctor
```

`squad init` creates `.squad/` (team state, decisions, ceremonies), `.github/agents/squad.agent.md` (the coordinator agent) and some Squad skills and workflows. The team itself is still empty - Squad casts it in the next step, based on what you tell it.

### 3.4.3 Cast the team

Start the Squad coordinator.

- **Copilot CLI:** `copilot --agent squad` inside the project folder.
- **VS Code:** add the project folder to your workspace (as in 3.2.3), open a new chat, and pick **Squad** in the agent picker.

<div class="warning" data-title="About --yolo">

> Squad's README suggests `copilot --agent squad --yolo`, because a team makes many tool calls. `--yolo` skips **every** approval prompt, including shell commands. In this workshop, start without it and approve the first steps yourself. Only switch to `--yolo` in a throwaway folder once you trust what the team does - see Chapter 9 for safer sandboxed options.

</div>

Then describe the project and the team you want:

```text
Set up the team for this project. It is the Rubber Duck Emporium:
a TypeScript/Node.js shop with a finished JSON API (Hono, zod, vitest).
README.md documents every endpoint. The next job is a web frontend
without a build step. I want a small team: a lead, a frontend developer,
a tester and a reviewer.
```

Review the proposed members and their charters. Answer `yes` when you are happy, or ask for changes first.

### 3.4.4 Let the team build Story 9

Give the team the story. If you use Option A, point to `../user-stories/09-web-frontend.md` instead and make sure that folder is readable (`/add-dir ..` in the CLI, or keep the fork root open in VS Code).

```text
Team, implement the user story in 09-web-frontend.md.

Rules:
- Read the story and README.md first. Use only the existing JSON API.
  Do not add or change backend routes.
- Plain HTML, CSS and JavaScript in public/, served from GET /.
  No framework, no bundler, no build step, no new runtime dependencies.
- Lead: before anyone writes code, post a short plan - screens, files,
  who owns which file - and wait for my approval.
- Give each file exactly one owner, so parallel work never edits the same file.
- Tester: add vitest tests that GET / serves the page and the scripts load.
  npm test and npm run typecheck must pass.
- Reviewer: check the result against every acceptance criterion and the
  out-of-scope list, then report what is done and what is missing.
```

Expect the lead to come back with a plan. Push back if it adds a framework, a build step or new API routes - the same discipline as reviewing a `plan.md` in the SDD loop. Approve, then let the team work. Commit after each completed piece of work.

### 3.4.5 Check the result

```bash
ADMIN_SECRET=change-me npm run dev
```

(PowerShell: `$env:ADMIN_SECRET="change-me"; npm run dev`.) Open <http://localhost:3000> and walk through Story 9 yourself:

- [ ] The catalog lists ducks with name, category, price and tagline, and shows a friendly empty state.
- [ ] Search, category and price filters work together.
- [ ] A duck's detail page shows the description, personality traits and stock label.
- [ ] You can add to the cart, change quantities, remove lines and see the total.
- [ ] Adding more than the stock shows a friendly message, not a raw error.
- [ ] Checkout validates the form and shows an order confirmation with the order ID.
- [ ] Duck of the Day and the quiz work and link to detail pages.
- [ ] It works on a narrow (mobile) window.
- [ ] `npm test` and `npm run typecheck` pass, and `git diff` shows no changes under `src/routes/`.

Then look inside `.squad/`: `decisions.md` and each agent's history show *why* the team did what it did. Compare that to the SDD artifacts from 3.2 - both make the agent's reasoning reviewable, one through specs, the other through team memory.

<div class="tip" data-title="Troubleshooting">

> - **`squad: command not found`** - open a new terminal after installing, or use the Homebrew/WinGet install.
> - **The Squad agent does not show up in VS Code** - check that `.github/agents/squad.agent.md` exists and that the project folder (not only the fork root) is a workspace folder.
> - **Two members edit the same file** - stop the run, ask the lead to reassign file ownership, and restore from your last commit.
> - **The team touches the backend** - reject the change and remind it of the "no new backend routes" rule from the story.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 4 spec-kit by GitHub

[spec-kit](https://github.com/github/spec-kit) is an open-source toolkit by the GitHub team that formalizes and extends the loop you just did by hand. As it is an open-source project it can not only be used in combination with GitHub Copilot but [many more agentic AIs for coding](https://github.github.io/spec-kit/reference/integrations.html). So if you now want to give it a try with Claude, Cursor or Codex, this is the moment.

<div class="info" data-title="If you want to learn more">

> https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering

</div>

It ships a `specify` CLI that scaffolds the `specs/` layout and the SDD steps for you, and integrates with several AI agents. For GitHub Copilot, a fresh install uses the **skills layout** by default: each step becomes an agent skill under `.github/skills/speckit-<step>/SKILL.md`. These skills work in the VS Code **Copilot** harness, the **Local** harness and the Copilot CLI.

<div class="warning" data-title="Enterprise organization check">

> Some organizations restrict which CLIs developers can install (`uv`, `uvx`, `npx`, etc.). If `specify` is not allowed in your environment, you have already learned the underlying workflow in Chapter 3.

</div>

## 4.1 Install & initialize the project

Follow the installation instructions in the [spec-kit README.md](https://github.com/github/spec-kit#-get-started).

Use a fresh folder next to Chapter 3's `duck-emporium/`, so spec-kit's `specs/` output doesn't mix with your hand-rolled specs. From the root of your fork:

```bash
specify init duck-emporium-speckit --integration copilot
## choose between bash or powershell when prompted
cd duck-emporium-speckit
```

<div class="warning" data-title="Make sure VS Code can see the skills">

> `specify init` creates `duck-emporium-speckit/` with its own `.specify/` and `.github/skills/` folders. As in Chapter 3, VS Code only discovers project skills in workspace folders: **File** → **Add Folder to Workspace…** → `duck-emporium-speckit`, and keep your fork's root open so the agent can read `user-stories/`. In the Copilot CLI, start `copilot` inside `duck-emporium-speckit/` and run `/add-dir ..`.

</div>

This creates a structured layout with the SDD phases (`/speckit-specify`, `/speckit-plan`, `/speckit-tasks`, `/speckit-implement`, `/speckit-converge` and some additional steps) pre-wired as skills that you invoke from chat.

<div class="info" data-title="Dots vs. hyphens">

> Older spec-kit versions and many blog posts use dotted commands (`/speckit.specify`) backed by prompt files and custom agents. That "commands layout" is still available with `specify init … --integration copilot --integration-options="--commands"`. Its prompt files only run in VS Code's **Local** harness. With the default skills layout, use the hyphenated names.

</div>

## 4.2 Run the same loop, but guided

In GitHub Copilot Chat:

```text
/speckit-specify checkout #user-stories and create a specification out of them
```

<div class="tip" data-title="Branching">

> When spec-kit starts working it creates a dedicated working branch.

</div>

Compare what spec-kit does and what it generates against the hand-rolled `sdd-*` skills from Chapter 3. You will recognize every step, spec-kit just removes the boilerplate.

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 5 (coming soon) - Squad

A dedicated chapter on [squad](https://github.com/bradygaster/squad): an open-source framework for orchestrating multi-agent development teams on top of GitHub Copilot is planned for an upcoming version of this workshop.

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 6 - App Modernization

Chapter 3 used SDD to build something new. This chapter uses the same discipline in the opposite direction: taking an **existing** code base - usually one nobody fully understands anymore - and modernizing it without losing the business rules baked into it over the years.

Modernization is where agentic AI actually earns its keep. A human alone can rewrite a legacy service, but the tedious parts - reading every controller, every stored procedure, every XML config, every home-grown utility - are exactly what the agent is good at, *if* you give it a framework to work in. That framework is SDD, applied backwards: first you use the agent to **rediscover** the spec that the code implicitly encodes, then you use SDD forward again to plan and rebuild against that spec.

<div class="info" data-title="Same discipline, different starting point">

> In Chapter 3 the input was a user story and the output was code. In this chapter the input is code and, over multiple SDD iterations, the output is (first) a spec, then a plan, then new code. The Spec → Plan → Tasks → Implement loop is the same - we just "misuse" it.

</div>

## 6.1 Why divide and conquer matters even more here

A greenfield project has one thing legacy code doesn't: a bounded scope. You know what you are building because you just wrote the story. In a legacy system, scope is whatever accumulated over 5–20 years of tickets, hotfixes, integrations and "temporary" workarounds. Trying to modernize it in one pass - even with the best agent - reliably produces two outcomes:

1. **Silent behavior loss.** Edge cases that were load-bearing for one specific customer disappear because nobody documented them and the agent had no reason to preserve them.
2. **Context collapse.** The agent's context window fills up with legacy code before it gets to reason about the target architecture, and quality drops sharply.

The fix is the same discipline you already learned: **break the work into phases, each producing a reviewable artifact, each committable on its own.** We use four phases for modernization:

| Phase | Input | Output | Question it answers |
| --- | --- | --- | --- |
| **1. Rediscovery** | Legacy source, docs, tickets | Reverse engineered business logic + curated `AGENTS.md` | *What does this system actually do?* |
| **2. Substitution audit** (optional) | Legacy sources, rediscovered business logic | Substitution map | *What in here is no longer needed or state of the art?* |
| **3a. Re-architecture** | Reverse-engineered business logic + substitution map, if phase 2 was completed | Target architecture plan | *What should the new shape look like?* |
| **3b. Re-write** | Target plan + reverse-engineered business logic + substitution map, if phase 2 was completed | New implementation + tests (you can also apply Test Driven Development here) | *How do we rebuild the business logic without losing it?* |
| **4. Deploy** (optional) | Working new build | CI/CD pipeline + running environment | *How does this ship, repeatably?* |

<div class="warning" data-title="Agentic AI is non-deterministic">

> Agentic AI is not a magic solution, especially during phase 1. In real-world scenarios, combine agent assistance with human review and deterministic tools to verify the rediscovered business logic. Do not expect a one-click solution; validate every rule.

</div>

## 6.2 Phase 1 - Rediscovery/Reverse engineering

In phase 1, use the source code, existing tests and documentation-whatever is available-to produce a reviewable list of business rules, data models 🗄️ and integrations.

You point the agent at the repository (or, more often, a *module* of it) and ask it to produce artifacts like:

- **A list of business rules** - what the system does, in plain English, with examples. This is the most important artifact: it is what you will use to validate that the new implementation preserves the old behavior.
- **A data model summary** 🗄️ - entities, relationships, data types and encoded value domains, and invariants (including the ones only enforced by DB triggers or defensive `if`s scattered across services).
- **An integration inventory** - every external system this module talks to: databases 🗄️, message queues, third-party APIs, filesystem paths, hard-coded IPs.
- **An open-questions list** - anything the agent could not resolve from the code alone. Use it to interview people who know the system.

<div class="tip" data-title="Curate an AGENTS.md before you go deep">

> `AGENTS.md` files are very handy in agentic modernization scenarios too. Even before the rediscovery phase starts, a curated `AGENTS.md` helps the agent understand the context of the legacy system and its dependencies, and avoid making wrong assumptions.

</div>

<div class="info" data-title="Rediscovery is where humans still lead">

> The agent is fast at reading code. It is not fast at knowing which of the 40 branches in the pricing engine is actually used in production. Treat phase 1 as *agent-assisted archaeology*: the agent produces drafts, humans who know the system correct them, and the corrections get folded back into the results.

</div>

At the end of phase 1, you have a document that people and agents can review. That may be worth the exercise on its own, even if you keep the current technology stack-for example, a mainframe-and do not proceed to phase 2.

## 6.3 Phase 2 - Substitution audit (optional)

Phase 1 tells you *what* the system does. Phase 2 asks: *of the things it does, which ones should not be done that way anymore?*

Review each element in the rediscovery spec against today's ecosystem:

- **Home-grown code that is now a library.** Custom retry loops, hand-rolled JSON parsers, bespoke connection pools, in-house auth - anything that has become a well-supported dependency (or a platform primitive) since the code was written.
- **Integrations that have moved on.** SOAP endpoints that now offer REST/GraphQL, on-prem message brokers with managed equivalents, batch file drops that could be event streams, custom SFTP scripts that could be a managed connector.
- **Data stores that no longer fit.** 🗄️ A single monolithic RDBMS holding data with wildly different access patterns; a NoSQL choice that was trendy in 2015 but has no operator today; a schema shaped around a UI that no longer exists.
- **Runtimes and frameworks past their sell-by date.** End-of-life language versions, EOL frameworks, container base images with unpatched CVEs, servers nobody ships new versions of.
- **Operational assumptions that don't survive contact with the cloud.** Local filesystem state, background threads that must survive across requests, singleton in-memory caches, "just SSH in and restart it" runbooks.

Record the results in a table. For example: *"custom JWT verification in `src/auth/` → replace with framework middleware; reason: CVE exposure and no active maintainer"* or *"nightly cron pushing CSVs to partner FTP → replace with an event-driven pipeline; reason: latency and observability"*. Each row proposes a change and states its trade-off, giving phase 3 evidence for architectural decisions.

<div class="info" data-title="Not everything gets substituted">

> A perfectly good substitution map has "keep as-is" rows. If a piece of the legacy system is stable, well-understood and cheap to run, leaving it alone is a legitimate outcome. Modernization is not a synonym for rewriting everything.

</div>

## 6.4 Phase 3 - Re-architect and re-write

Phase 3 is where you go from *understanding* the legacy system to *replacing* it. It splits cleanly in two, and the split matters because they answer different questions and are reviewed by different people.

### 6.4.1 Phase 3a - Re-architecture

Use the reverse-engineered business logic from phase 1 and, if you completed phase 2, its substitution map. Produce a **target architecture plan** for the whole module or system, not a single story.

The plan covers:

- **Target runtime and platform** - language version, framework, deployment target (containers, serverless, managed app platform).
- **Module and service boundaries** - what stays a monolith, what splits out, and *why* (each split needs a justification tied back to the behavior spec).
- **Data model and storage choices** 🗄️ - the target store and the migration path from the legacy schema (see the database-migration note below).
- **Integration contracts** - the concrete API/event shapes replacing legacy integrations flagged in phase 2, if completed.
- **Cross-cutting concerns** - auth, logging, config, secrets, observability, feature flags.
- **Migration strategy** - big-bang vs. strangler-fig vs. parallel-run, and how you keep the lights on for existing users during the transition.
- **Risks** - the ones the agent can name from the spec plus the ones the humans add from experience.
- Other concerns specific to your modernization scenario or technology stack.

<div class="info" data-title="🗄️ Database migrations have their own failure modes">

> Storage is the part of a modernization most likely to lose data quietly. When the migration path crosses a **database boundary** - an engine swap (e.g. Oracle → PostgreSQL), relational → NoSQL, or a schema reshape - pin down four things the general plan does not:
> - **Type and constraint mapping** - every source type and rule maps to a target one (e.g. Oracle `VARCHAR2`/`NUMBER`, check constraints, triggers). Flag the ones with no clean equivalent.
> - **Data move** - one-shot backfill vs. **dual-write + backfill** while both stores run, so you can cut over without downtime.
> - **Cutover** - the read/write switch point, tied to the strangler-fig interface from phase 3b, with a rollback path.
> - **Parity verification** - prove old and new agree: row counts, checksums/aggregates, and behavior tests replayed against both stores.

</div>

### 6.4.2 Phase 3b - Re-write

Once the architecture is approved, rewriting the business logic follows the workflow from Chapter 3. Turn the rediscovered rules, approved architecture and any substitution decisions into a spec, plan and task list, then implement the tasks one at a time with tests.

Two techniques matter here:

- **Behavior-preserving tests come first.** Before rewriting a module, derive tests from the rediscovery spec that exercise its observable behavior. These tests live against the *new* implementation and are your guardrail against silent regressions.
- **Strangler-fig by default.** Route new implementations behind the same interface as the legacy code and switch traffic gradually. Big-bang cutovers are viable for small modules and effectively never viable for large ones.

<div class="warning" data-title="Do not let the agent invent business rules">

> If a business rule is missing during phase 3b, the agent may guess what the legacy system did. Instruct it to stop and ask whenever a rule is unclear. Validate assumptions before they reach production, where they could affect customers with untested edge cases.

</div>

## 6.5 Phase 4 (optional) - CI/CD and deployment

At this point, the earlier artifacts pay off again: the architecture plan names the deployment target, the substitution map (if you completed phase 2) names operational changes, and the behavior tests give you a signal to gate a pipeline on. In phase 4, you:

- Set up (or extend) the CI pipeline to build, test and scan the new code.
- Produce the infrastructure-as-code for the target platform (containers, managed services, whatever phase 3a picked).
- Wire up secrets, config, observability and health checks.
- Define the promotion path - dev → staging → production - and the rollback path.
- Run the strangler-fig cutover from phase 3b behind whatever traffic-shifting mechanism your platform provides.

## 6.6 Hands-on: modernize a legacy application

Choose one of two tracks. Both use the same four-phase framework; phases 2 and 4 are optional. The tracks differ only in how you guide the agent(s). You do **not** need to complete both.

- **Track A - spec-kit driven (recommended).** You drive the loop yourself with the `/speckit-*` skills from [Chapter 4](#chapter-4-spec-kit-by-github), one full loop per phase. No bespoke assets required. This is the natural continuation of the spec-kit chapter and is stack-agnostic.
- **Track B - GitHub Copilot-native custom agents + prompts (alternative).** You run a pre-built kit of custom agents and prompt files that productize the exact same four phases into turnkey, one-artifact-per-run commands. This track doubles as a capstone for the custom agents (1.5) and prompt files (1.4) you met earlier.

If your legacy system happens to be Java, .NET or C++, there is also a vendor-built route: [6.7](#67-off-the-shelf---the-github-copilot-modernization-agents) covers the GitHub Copilot modernization agents. Do the hands-on first - knowing what the loop *should* look like is what lets you judge whether the product's output is any good.

<div class="info" data-title="Why we leave the duck behind here">

> Both tracks deliberately step away from the greenfield `duck-emporium` you use elsewhere in this workshop. Modernization needs *real legacy code* - a purpose-built TypeScript/Node sample would defeat the point - so each track works against an external legacy repository instead. Everything you learn transfers straight back to whatever legacy system you actually own.

</div>

### 6.6.1 Track A (recommended) - spec-kit driven

Use this [Java legacy application](https://github.com/jkordick/training-java-monolith-refactor) for the exercise. Clone it and initialize spec-kit as described in [Chapter 4](#chapter-4-spec-kit-by-github).

For each phase you choose to run, complete **one full spec-kit loop**. Treat the modernization activity as the feature: `/speckit-specify` defines its deliverables and constraints, `/speckit-plan` designs the approach, `/speckit-tasks` breaks the work into tasks, and `/speckit-implement` produces the artifacts. The prompts below cover only `/speckit-specify`; spec-kit guides you through the remaining steps.

<div class="tip" data-title="Why specify the activity, not just do it">

> Reverse engineering, auditing, re-architecting and deploying are all non-trivial pieces of work with their own failure modes. Specifying them first forces you (and the agent) to be explicit about *what "done" looks like* before any file is touched - which is the whole point of SDD.

</div>

#### Phase 1 - Rediscovery

```text
/speckit-specify Specify a rediscovery of this legacy Java monolith. Deliverables: (1) a business-rules document in plain English with concrete code references and examples, (2) a data-model summary - entities, relationships, invariants (including those enforced only by defensive code or DB constraints), (3) an integration inventory (every external system, filesystem path, hard-coded endpoint), (4) an open-questions list for anything the code alone cannot answer. Constraints: no code changes, no modernization proposals, stop and ask before guessing behavior. Success: a domain reviewer can validate each rule against a concrete code reference.
```

Then run `/speckit-plan`, `/speckit-tasks`, `/speckit-implement` to design the reading order, split by module/subsystem, and produce the artifacts. Do the same after each `/speckit-specify` in the phases below.

#### Phase 2 - Substitution audit

```text
/speckit-specify Specify a substitution audit over the rediscovery artifacts (phase 1). Deliverables: (1) a substitution-audit table with columns *legacy element*, *proposal* (keep-as-is | replace-with-library | replace-with-platform | retire), *reason*, *trade-off*; (2) coverage spanning home-grown code with modern equivalents, dated integrations, unfit data stores, EOL runtimes/frameworks, and cloud-hostile operational assumptions. Constraint: audit only - do not design the new architecture. Success: every row links back to a specific rediscovery entry.
```

#### Phase 3a - Re-architecture

```text
/speckit-specify Specify the target architecture for the modernized system, informed by the rediscovery (phase 1) and, if completed, the substitution audit (phase 2). Deliverables: (1) target runtime and platform, (2) module/service boundaries, (3) data model and migration path from the legacy schema, (4) integration contracts replacing each flagged legacy integration, (5) cross-cutting concerns (auth, logging, config, secrets, observability), (6) migration strategy (default: strangler-fig), (7) risks. Constraint: architecture only - no code, no per-module rewrite tasks yet. Success: every architectural choice traces back to a preserved business rule or, when available, a substitution-audit row.
```

#### Phase 3b - Re-write

```text
/speckit-specify Specify the rewrite of a single module (module boundaries defined in the re-architecture, phase 3a), informed by the rediscovery (phase 1), any substitution decisions (phase 2), and the target architecture (phase 3a). Deliverables: (1) functional requirements for the module, (2) behavior-preserving acceptance tests derived from the phase-1 business rules - every functional requirement must map to at least one, (3) an interface contract identical to the legacy code so traffic can be switched gradually. Constraint: if a business rule is ambiguous or missing, stop and ask - never invent behavior. Note: repeat this phase-3b loop module by module until the legacy code path is empty. Success: legacy and new implementation produce identical results for the acceptance tests.
```

#### Phase 4 (optional) - CI/CD and deployment

```text
/speckit-specify Specify the deployment for the modernized system, informed by the target architecture (phase 3a) and the current build/test setup. Deliverables: (1) CI pipeline (build, test, scan), (2) infrastructure-as-code for the platform chosen in the re-architecture (phase 3a), (3) secrets/config/observability wiring, (4) promotion path dev → staging → production, (5) rollback path, (6) strangler-fig traffic-shifting mechanism for modules rewritten in phase 3b. Constraint: no live deployment during specify/plan/tasks. Success: from these artifacts alone, a fresh environment can be created and a rewritten module cut over end-to-end.
```

### 6.6.2 Track B (alternative) - Copilot-native custom agents + prompts

This track provides the same four phases as a pre-built kit of **custom agents** (personas) and **prompt files** (actions). It uses an IBM COBOL application - [Bank-of-Z](https://github.com/IBM/Bank-of-Z) - so you can see how the approach applies beyond Java.

**Get the kit.** The agents and prompts live on the [`app-mod-ghcp-native-start`](https://github.com/EfeSenerr/ghcp-advanced/tree/app-mod-ghcp-native-start) branch of this repo, under `.github/agents/` and `.github/prompts/`. Fork & clone [Bank-of-Z](https://github.com/IBM/Bank-of-Z), open it in VS Code (or `cd` into it), then copy the `.github/agents` and `.github/prompts` folders from that branch into the cloned repository.

**How the prompts and agents work together.** The `.github/agents/*.agent.md` files are the **personas** - each one is a custom agent with a scoped mission, ownership and tool access (e.g. `cobol-archaeologist` is read-only, `module-rewriter` can edit and run tests). The `.github/prompts/*.prompt.md` files are the **actions** - small, single-purpose commands you invoke from Chat. Each prompt has an `agent:` in its frontmatter, so running the prompt automatically switches Copilot into the right persona for the job.

**How to invoke them.**

- **In VS Code:** open a new chat and set **Session Target** to **Local**. The kit uses prompt files, and those run only in the Local harness. Type `/` and pick the prompt by name (they show up as `01-rediscovery-bootstrap`, `01-rediscovery-business-rules`, …). Copilot switches to the pinned agent, runs the prompt, produces the artifact, then stops.
- **In the Copilot harness or the Copilot CLI:** prompt files are not loaded. The custom agents still work, so pick one from the agent picker (or with `/agent` in the CLI) and paste the prompt body. Or convert the kit's prompts to user-invoked skills with **Chat: Open Customizations** -> **Migrations** -> **Convert Prompt to Skills** (see [1.6](#16-agent-skills)). The conversion drops the `agent:` pin, so select the matching agent yourself before you invoke each skill.

**The execution pattern is the same for every prompt.** Run one prompt → review the diff → commit → run the next. Each prompt writes to a named artifact under `docs/modernization/<phase>/`, cites `path/to/file:LINE` for anything specific, and stops. If it hits ambiguity, it appends to `docs/modernization/01-rediscovery/open-questions.md` instead of guessing. This is what makes the flow reviewable and controllable: every step is a small, git-diffable change against a persistent artifact - no big-bang generations, no invented behavior.

<div class="tip" data-title="One prompt at a time">

> Resist the urge to chain prompts inside a single Chat turn. The value of the breakdown is that a human sees each artifact before the next prompt runs. Chaining collapses the review points.

</div>

#### Phase 1 - Rediscovery

Agent: `cobol-archaeologist` (read-only). Artifacts land in `docs/modernization/01-rediscovery/`. Run these prompts, in order, reviewing between each:

1. **`/01-rediscovery-bootstrap`** - scans the repo, writes `repo-map.md` (programs, copybooks, JCL, DDL, config) and drafts an `AGENTS.md` at the repo root. Always run this first, on any legacy repo. Review the `AGENTS.md` carefully - it is what every subsequent agent turn will silently load.
2. **`/01-rediscovery-business-rules`** - pick **one** module from the reading order in `repo-map.md`. Appends business rules for that module to `business-rules.md`, citing `path/to/file:LINE` with worked examples. Re-run per module - do not sweep the whole repo in one go.
3. **`/01-rediscovery-data-model`** 🗄️ - reverse-engineers entities, keys, invariants and encoded value domains from DDL, copybooks and defensive code. Appends to `data-model.md` (include a mermaid ER diagram if it helps reviewers).
4. **`/01-rediscovery-integrations`** - inventories every external touchpoint (DB tables 🗄️, files, MQ, sockets, CICS/IMS transactions, JCL triggers, hard-coded endpoints). Appends to `integrations.md` with direction and load-bearing flag.
5. **`/01-rediscovery-open-questions`** - final sweep. Consolidates hedging language, unexplained codes, dead-branch guesses and cross-artifact contradictions into `open-questions.md` with blast-radius annotations. Take this list to the domain experts before you move on.

#### Phase 2 - Substitution audit (optional)

Agent: `substitution-auditor`. Artifact: `docs/modernization/02-substitution-audit/audit.md`.

One prompt: **`/02-substitution-audit`**. Run it once per category (home-grown code / dated integrations / unfit data stores 🗄️ / EOL runtimes / cloud-hostile ops) or once per subsystem. Each run appends rows to `audit.md` with `verdict ∈ {keep-as-is, replace-with-library, replace-with-platform, retire}`, a reason, and an explicit trade-off. Rows without a trade-off get rejected by the agent by design - that is the guardrail against "let's just rewrite it in $LANG" bias. Phase 2 is optional: some engagements stop after phase 1 (e.g. you want the docs but plan to keep the mainframe another few years).

#### Phase 3a - Re-architecture

Agent: `target-architect`. Artifact: `docs/modernization/03a-architecture/target-architecture.md`.

One prompt: **`/03a-architecture-decision`**. Run it once per architectural decision (target runtime/platform, module boundaries, data model + migration path 🗄️, an integration contract, a cross-cutting concern, migration strategy, a named risk). **Why one decision per run:** architecture decisions have consequences that later ones depend on, so running them one at a time forces you to review, commit, and let the next decision cite the previous one. If the agent judges a choice genuinely open, it lists two options with trade-offs and **stops without picking** - that is your cue to bring a human architect in.

#### Phase 3b - Re-write

Agent: `module-rewriter`. Artifacts: `docs/modernization/03b-rewrite/<module>/{acceptance-tests,interface,parity}.md` and the new implementation under wherever phase 3a put the target codebase.

Three prompts, in order, **per module**:

1. **`/03b-rewrite-tests`** - derives behavior-preserving acceptance tests from the module's section of `business-rules.md`. Output is a table in `acceptance-tests.md`: `test id | rule ref | input | expected output | notes`. No test code yet - this is the acceptance contract in review-friendly form. If a rule is ambiguous the prompt stops and files an entry in `open-questions.md`.
2. **`/03b-rewrite-interface`** - writes `interface.md`: entry points, input/output layouts field-by-field, return-code semantics, side effects, and the strangler-fig switch point. This is what lets the new implementation drop in behind the legacy interface.
3. **`/03b-rewrite-implement`** - the actual TDD loop. Pick a **slice** of the acceptance tests (small enough to review) and run the prompt. It writes the test code, verifies the tests fail, writes the smallest implementation that makes them pass, runs the full module suite, and appends the slice status to `parity.md`. Repeat until the module is green.

Repeat all three prompts for the next module. When every module is green, phase 3b is done.

<div class="warning" data-title="Ambiguity is the enemy">

> If you catch the agent inventing an expected output in `acceptance-tests.md`, or filling in a return code in `interface.md` that isn't in the legacy code, stop the run and treat it as a bug in your prompt discipline - not in the tool. The prompts explicitly tell it to stop and ask; if it didn't, the context probably included a stale rule from an earlier phase. Fix the source, not the symptom.

</div>

#### Phase 4 (optional) - CI/CD and deployment

Agent: `deployment-engineer`. Artifacts: `.github/workflows/`, `infra/`, and `docs/modernization/04-deploy/`.

Three prompts, run in whatever order suits your team:

1. **`/04-deploy-ci`** - emits `.github/workflows/ci.yml` (build, unit tests, phase-3b acceptance tests as a gate, security scan, IaC lint, package) plus `pipeline.md`. Files only - the prompt refuses to execute the workflow.
2. **`/04-deploy-iac`** - emits infrastructure-as-code under `infra/` in the flavor phase 3a picked (Bicep / Terraform / etc.), plus `observability.md`. If phase 3a didn't pick a flavor the prompt stops and asks. Secrets are always referenced by name from a vault - the prompt refuses to inline values. Nothing gets `apply`d.
3. **`/04-deploy-cutover`** - writes `promotion.md`, `cutover.md` and `rollback.md`: the strangler-fig traffic-shift mechanism, the dev → staging → prod gates, and how to fail back at each shift step including in-flight state reconciliation.

Phase 4 stops at emitting reviewable artifacts. Actually running `az deployment`, `terraform apply`, or flipping a feature flag in production is out of scope for the workshop - that is a decision for a human with a change-management ticket, not an agent turn.

<div class="info" data-title="What you take home">

> After a full pass you have: a curated `AGENTS.md`, four rediscovery documents that a domain reviewer signed off on, a substitution audit with explicit trade-offs, an architecture document where every decision is traceable, one or more modules re-implemented with a parity report against the legacy behavior, and a deployable pipeline + IaC. Every one of those artifacts survives without the agent - that is the durable value of doing modernization this way. And this pattern repeats with every kind of legacy system.

</div>

## 6.7 Off-the-shelf - the GitHub Copilot modernization agents

Everything up to here you assembled yourself out of Copilot primitives: prompt files, custom agents, spec-kit loops. Microsoft ships a **productized** version of a similar idea: [GitHub Copilot modernization](https://learn.microsoft.com/azure/developer/github-copilot-app-modernization/overview). Developed for the stacks where the modernization target is already well known: runtime and framework upgrades for Java, .NET and C++.

It comes in two surfaces, and they are designed to be used together, but can also be used separately. Both run the same **Assess → Plan → Execute** model. 

| Surface | Who it is for | Scale |
| --- | --- | --- |
| **IDE extension**: GitHub Copilot modernization for VSCode/ IntelliJ/Visual Studio| Developers | Interactive, hands on the code |
| **Modernize CLI** | Architects, app owners, platform teams and developers | Many repositories in batch or CI/CD, *and* a single application hands-on via its interactive TUI |

The intended operating model is: the CLI assesses the estate and produces plans, someone reviews and prioritizes them into waves, and then each repository is executed - either by the CLI itself (interactively, delegated to the cloud agent, or headlessly in a pipeline), or handed off to the developer who owns it to run in the IDE.

<div class="info" data-title="What is actually supported">

> Disclaimer: check the documentation for the most up-to-date information on supported languages, frameworks, and features. [Link](https://learn.microsoft.com/azure/developer/github-copilot-app-modernization/languages)
> - **Java, .NET, C++**: Upgrades of runtime, framework & toolset
> - **Java, .NET only**: Migration to Azure scenarios, cloud-readiness scanning
> - **Java only**: CVE and CWE security scanning
> - **JavaScript/TypeScript** npm package 
> - **Python**: migrations from Semantic Kernel or AutoGen to the Microsoft Agent Framework.
> Containerization and deployment tasks 

</div>

### 6.7.1 The IDE experience: VS Code extension

After installing the [GitHub Copilot modernization extension](https://marketplace.visualstudio.com/items?itemName=vscjava.migrate-java-to-azure) and a restart of VS Code you get a dedicated sidebar pane with a quickstart area (start an assessment, upgrade runtimes and frameworks) and a task catalog (upgrades, migrations, containerization, deployment, quality and security).

<div class="info" data-title="Which IDE for which stack">

> Java is the most complete story and works in **VS Code** and **IntelliJ IDEA**. .NET is covered in **Visual Studio** and VS Code. C++ is **Visual Studio only**.

</div>

<div class="tip" data-title="Look what it is made of">

> After installing the extension, open the tool and agent pickers in GitHub Copilot Chat. You will find a set of `GitHub Copilot modernization` tools and a family of `modernize` custom agents. 

</div>

**The loop, end to end:**

1. **Assess**: Point it at your project and pick the analysis domains (e.g. cloud readiness, Java upgrade). It runs [AppCAT](https://learn.microsoft.com/azure/migrate/appcat/java) and produces an assessment report that groups findings by issue, each with recommended solutions.
2. **Pick a solution and run it**: Chat opens in agent mode and the agent writes a `plan.md` and a `progress.md`. **Read `plan.md` and edit it if needed**: this is your migration plan and your review gate.
3. **Confirm**: You approve, and the agent checks version control status and creates a migration branch *before* touching code.
4. **Transform**: The agent applies the code, config and dependency changes.
5. **Validate**: In the Java migration flow a fixed sequence runs: CVE check → build → consistency analysis (did behavior change?) → tests → completeness analysis (did we miss occurrences?). Failures are fed back for repair.
6. **Review**: A migration summary is produced. You read the diff and accept or discard it.

The modernization agents come with **predefined migration Tasks** (SQL auth → Managed Identity 🗄️, message broker → Azure Service Bus, local file I/O → Blob Storage, and so on). 

To extend these tasks you can define **custom skills** in `.github/skills/<name>/SKILL.md`, the same [Agent Skills](https://agentskills.io/specification) format you met in [1.6](#16-agent-skills).

### 6.7.2 Hands-on: Run a modernization via the IDE Extension

*Tested on: MacOS, VSCode Insiders: 1.136.0-insider, GitHub Copilot modernization extension: 1.23.26081703*

**Pre-requisites:**
- GitHub Copilot active
- GitHub Copilot modernization extension installed
- JDK 21+ (pre-download the target SDK & docker image to save time) and Maven or Gradle

Clone [`Azure-Samples/java-migration-copilot-samples`](https://github.com/Azure-Samples/java-migration-copilot-samples), `main` contains the source projects, `expected` contains the expected results. If you open the root of the cloned repo and open the GitHub Copilot modernization extension from the sidebar you are prompted with multiple quick start options for a multi-language app.
![GHCPMod-QuickStart](./assets/GHCPMod-QuickStart.png)  
If you open a dedicated folder like the `mi-sql-public-demo` 🗄️ folder it will prompt you with dedicated prompts for your tech stack. If you open the `Tasks` tab you can spot the previously described migration tasks you can extend with skills.

Start recommended assesment including the Java Upgrade, Cloud Readiness and Security Assesment.

![GHCPMod-Assessment](./assets/GHCPMod-Assessment.png)

Multiple things will happen, the GitHub Copilot Chat opens with a pre-defined prompt for the security assessment while the agent starts the work and a tab will open providing you information on the progress and results of all the assessments. 

> If you do not want to approve every single tool call, you should enable autopilot & allow all.

> Sometimes GitHub Copilot seem to get stuck in the Chat window itself. If this happens just stop it manually and restart the assessment by prompting `continue`.

When the assessment is complete you can review the results. If you select different target services you will see that the `Create plan` button updates related to the tasks that need to be performed.

If you click on `Create plan` GitHub Copilot in the chat window will take over again with a dedicated prompt to create a modernization plan. Review the `plan.md` when GitHub Copilot is done. 

After reviewing continue the modernization by prompting GitHub Copilot `execute plan.md`. The tasks that will be executed can be seen in the `tasks.json` (located in the same folder as the `plan.md`). 

> This will take a while. If you tasked GitHub Copilot to build a Docker image, make sure Docker in installed.


### 6.7.3 The Modernize CLI

The [Modernize CLI agent](https://learn.microsoft.com/azure/developer/github-copilot-app-modernization/modernization-agent/overview) has the same capabilities as the IDE extensions but extends them to **portfolio scale**. The premise: an architect defines modernization standards *once* as reusable skills, and every team and repository gets the same governed path. It ships from [`microsoft/modernize-cli`](https://github.com/microsoft/modernize-cli) and is currently in public preview.

Where the IDE extension is one developer with one app, the CLI adds:

- **Multi-repository assessments**: one command over many repositories, with aggregated cross-repo reports and cloud-readiness scores.
- **Headless execution**:`--no-tty` for CI/CD pipelines and batch runs.
- **Cloud delegation**: `--delegate cloud` hands work to the GitHub Copilot cloud coding agent so repositories are processed in parallel.
- **Publishing to GitHub**: assessment summaries can be pushed straight into an issue.

#### Install

Prerequisites: `git`, [GitHub CLI](https://cli.github.com/) v2.45+, and a GitHub Copilot subscription (any plan).

```bash
# macOS / Linux - Homebrew
brew tap microsoft/modernize https://github.com/microsoft/modernize-cli
brew trust microsoft/modernize
brew install modernize

# macOS / Linux - shell script
curl -fsSL https://raw.githubusercontent.com/microsoft/modernize-cli/main/scripts/install.sh | sh
```

```powershell
# Windows - winget (recommended)
winget install GitHub.Copilot.modernization.agent
```

Open a new terminal, then verify and authenticate:

```bash
modernize --version
gh auth login
```

#### Interactive mode

Running `modernize` with no arguments drops you into a TUI. The main menu is, unsurprisingly, the four things you already know: **assess** a codebase, **plan** a modernization from those findings, **execute** a plan, or run a quick-start **upgrade** flow that plans and executes a runtime/framework bump in one go. 

All artifacts that will be produced during the modernization-cli run will land in your repository, which is the whole point: they are git-diffable and survive the session.

> Check [the documentation](https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/modernization-agent/cli-commands) or `--help` for all existing CLI commands and flags.

For portfolio runs, beyond a single repository, list your repositories in `.github/modernize/repos.json`. It is picked up automatically where each entry carries a `name` plus a `url` or local `path`, and optionally a branch. You can also group repositories into logical applications so the aggregated report is organized per app.

```bash
# Assess three repos at once and publish the summary to an issue
modernize assess \
  --source ./billing-service \
  --source ./customer-api \
  --source https://github.com/org/legacy-batch.git \
  --issue-url https://github.com/org/repo/issues/123

# Plan a specific migration, then review plan.md before executing
modernize plan create "migrate from oracle to azure postgresql" --plan-name oracle-to-pg
modernize plan execute --plan-name oracle-to-pg

# One-shot upgrade, delegated to cloud agents
modernize upgrade "Java 21" --delegate cloud

# Headless, for a pipeline
modernize plan execute --plan-name oracle-to-pg --no-tty
```

In Windows PowerShell, continue lines with a backtick instead of `\`:

```powershell
modernize assess `
  --source ./billing-service `
  --source ./customer-api `
  --source https://github.com/org/legacy-batch.git `
  --issue-url https://github.com/org/repo/issues/123
```

<div class="warning" data-title="Cloud delegation has prerequisites">

> To use `--delegate cloud` the repo(s) needs to have **github.com** URLs, and the cloud coding agent has to be enabled in each repository. Additionally the modernization MCP server has to be configured, and enough access for the agent to push a branch or fork. 
> Local paths, GitLab and Azure DevOps sources have to run locally.

</div>

<div class="tip" data-title="plan.md is your review gate - use it!">

> `modernize plan create` and `modernize plan execute` are two commands on purpose.`plan.md` is the human-readable intent, `tasks.json` is what the agent actually walks, so skim both before you execute.

</div>

### 6.7.4 Hands-on: run the modernization agent end to end

*Tested with version 1.0.74*

Clone [`Azure-Samples/java-migration-copilot-samples`](https://github.com/Azure-Samples/java-migration-copilot-samples), `main` contains the source projects, `expected` contains the expected results. Navigate in the terminal to the folder `todo-web-api-use-oracle-db` 🗄️.

Type `modernize` to start the TUI.

![GHCPMod-CLI_TUI](./assets/GHCPMod-CLI_TUI.png)

We will just go with the flow: **assess** the current folder running locally → **create a plan** from the assessment → give it a goal → answer the clarifying questions → **read and edit `plan.md`** → **execute**.

Kick off a locally running assessment. After the assessment is done, a report in form of a html will pop up in your browser (very similar to the report you saw earlier if you ran the agent in the IDE already).

After reviewing the assessment report, go back into your CLI and continue with creating a modernization plan. Keep it locally to keep it simple. You can decide if you want to use the just created assessment report as the requirements basis or if you want to provide a custom prompt.

![GHCPMOD-CLI_Plan](./assets/GHCPMOD-CLI_Plan.png)

You need to provide some input for the modernization goal, potential deployment goal, mocks and testing. When the plan is created you are provided with the link to the `plan.md` file and a summary provided directly in the CLI.

After reviewing the plan you can select it, choose if you want to create a new branch and execute it.

After GitHub Copilot done, review the executed changes, iterate further via the GHCP CLI or GHCP in VSCode, commit and push.

### 6.7.5 When to use what?

| Situation | Reach for |
| --- | --- |
| Supported stack, known target, one app, you want to watch it work | **IDE extension** |
| One app, but you live in the terminal | **Modernize CLI** interactively; same loop, TUI instead of a sidebar |
| Java, .NET or JavaScript/TypeScript across a portfolio, or you need it in a pipeline | **Modernize CLI**, batch assessment covers those three |
| C++ toolset upgrade (MSBuild or CMake) | **IDE extension** in **Visual Studio 2026 18.7+** 
| Unsupported stack (COBOL, RPG, Delphi, home-grown 4GL) | **spec driven development** |
| Supported stack, but nobody knows what the business rules are anymore | spec driven development for reverse engineering, modernize-cli for the upgrade |

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 7 (coming soon) - Agentic Workflows

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 8 - The GitHub Copilot SDK

So far you have *used* Copilot - in the IDE, in Chat, in the CLI. In this chapter you **embed** Copilot into your own code. The [GitHub Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) lets you talk to Copilot programmatically: open a session, send a prompt, stream the response, and - most interestingly - define **tools** in your own codebase that Copilot decides when to call.

<div class="info" data-title="SDK vs. CLI">

> The CLI from Chapter 1 is for **terminal workflows**. The SDK is for **embedding Copilot inside your apps, scripts, services and pipelines**. Under the hood the SDK starts and manages a Copilot CLI process for you and speaks JSON-RPC to it - so everything you learned about authentication, models and MCP in earlier chapters still applies.

</div>

By the end of this chapter you can:

- Install and configure SDK 2.0 in a TypeScript/Node project.
- Send messages and receive responses programmatically.
- Stream response events for interactive UX.
- Expose custom tools that Copilot can choose to call.
- Explain the 2.0 session model and choose a suitable runtime and sandbox architecture.
- Build a small interactive assistant that uses your tools.

## 8.1 Mental model: one runtime, many sessions

The Copilot CLI is like plugging a lamp into a wall outlet - it works great, you get light immediately. The SDK is like connecting straight to the **power grid**:

An isolated runtime or container per session is still useful when every task needs a shell, custom system dependencies, or a strong boundary. SDK 2.0 also lets you start with many lightweight sessions in one process and add sandboxing only where the work needs it.

![A shared SDK runtime hosts separately scoped sessions; a session does not get its own process or container by default.](diagrams/copilot-sdk-2-sessions.svg)

## 8.2 How SDK 2.0 fits together

| Component | What it does |
| --- | --- |
| **Client** | Starts and manages the connection to the Copilot CLI process. |
| **Session** | A conversation context - like a single Chat thread. |
| **Messages** | Prompts you send and responses you get back. |
| **Events** | Streaming updates for response chunks, tool execution, and session lifecycle. |
| **Tools** | Functions your app registers; handlers run in your application, under the policies and identity you choose. |

![The app connects through the SDK to the native in-process runtime; tools and policies remain under app control.](diagrams/copilot-sdk-2-architecture.svg)

The basic flow is still: create a client, create or resume a session, send a message, and react to events. The transport and runtime lifecycle have changed, but the session API remains familiar.

<div class="info" data-title="Other languages">

> This workshop's examples are TypeScript first, in line with the rest of the labs. The same SDK is available for **Python, Go, Rust, .NET and Java** - the API shape (`Client` → `Session` → tools/events) is identical, only the syntax differs. Pick whichever language matches your stack.

</div>

## 8.3 Prerequisites

Before starting, double-check:

- **Node.js `^20.19.0` or `>=22.12.0`** with npm.
- A way to authenticate: signed-in Copilot CLI credentials, a GitHub token supplied by your app, or a supported BYOK provider.

```bash
node --version
```

You do **not** need the Copilot CLI installed to run the SDK. The Node package includes the matching native runtime for supported platforms; `copilot login` is only needed if you choose to use credentials already stored by the CLI.

## 8.4 Hands-on: a weather assistant in TypeScript

Build a small assistant in stages: first send a prompt, then stream the response, add a custom tool, and finish with a REPL. Each code sample is runnable on its own.

### 8.4.1 Scaffold

On macOS or Linux:

```bash
mkdir copilot-sdk-lab && cd copilot-sdk-lab
npm init -y --init-type module
npm install @microsoft/copilot-sdk tsx
```

On Windows PowerShell:

```powershell
New-Item -ItemType Directory copilot-sdk-lab | Out-Null
Set-Location copilot-sdk-lab
npm init -y --init-type module
npm install @microsoft/copilot-sdk tsx
```

<div class="info" data-title="What is tsx?">

> `tsx` is a TypeScript runner that executes `.ts` files directly - no separate compile step. Think of it as a faster `ts-node`. You will invoke it via `npx tsx <file>.ts`.

</div>

### 8.4.2 Your first programmatic prompt

Create `index.ts`:

```ts
import { CopilotClient } from "@microsoft/copilot-sdk";

const client = new CopilotClient({ mode: "coding-agent" });
const session = await client.createSession({ model: "auto" });

const response = await session.sendAndWait({ prompt: "What is 2 + 2?" });
console.log(response?.data.content);

await client.stop();
process.exit(0);
```

Run it:

```bash
npx tsx index.ts
```

You created a session and sent a message through the SDK. With the default connection, the SDK loads the native runtime into the Node process; it does not start a Copilot CLI subprocess. The explicit `coding-agent` mode opts into the CLI-style built-in agent capabilities.

<div class="warning" data-title="In-process is not isolation">

> In-process hosting is a runtime choice, not a sandbox. A native runtime crash can take down your app. It also does not isolate a session's side effects from the host. Use a separate sandbox when a task runs untrusted code or needs a hard filesystem or process boundary.

</div>

### 8.4.3 Stream the response

Waiting for the whole response before printing anything feels sluggish. Enable streaming in the session's `events` options, then listen for `assistant.message_delta` and `session.idle`.

Replace `index.ts`:

```ts
import { CopilotClient } from "@microsoft/copilot-sdk";

const client = new CopilotClient({ mode: "coding-agent" });
const session = await client.createSession({
  model: "auto",
  events: { streaming: true },
});

session.on("assistant.message_delta", (event) => {
  process.stdout.write(event.data.deltaContent);
});

session.on("session.idle", () => {
  process.stdout.write("\n");
});

await session.sendAndWait({
  prompt: "Explain what the GitHub Copilot SDK does in two sentences.",
});

await client.stop();
process.exit(0);
```

Run it again - the answer now appears word by word, like a real chat.

### 8.4.4 Define a custom tool

This is where the SDK earns its keep. You can register **tools** - typed functions in your own code - and Copilot will decide when to call them based on the user's prompt. No prompt engineering required; the tool's `description` is enough.

Replace `index.ts`:

```ts
import { CopilotClient, defineTool } from "@microsoft/copilot-sdk";

const getWeather = defineTool("get_weather", {
  description: "Get the current weather for a city",
  parameters: {
    type: "object",
    properties: {
      city: { type: "string", description: "The city name" },
    },
    required: ["city"],
  },
  handler: async ({ city }: { city: string }) => {
    // In a real app this is where you'd call a weather API.
    const conditions = ["sunny", "cloudy", "rainy", "partly cloudy"];
    const temp = Math.floor(Math.random() * 15) + 15;
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    return { city, temperature: `${temp}°C`, condition };
  },
});

const client = new CopilotClient({ mode: "coding-agent" });
const session = await client.createSession({
  model: "auto",
  events: { streaming: true },
  tools: { definitions: [getWeather] },
  permissions: {
    onRequest: async (request) => {
      if ("managedApprovalRequired" in request && request.managedApprovalRequired) {
        return {
          kind: "reject",
          feedback: "This demo cannot grant a managed approval.",
        };
      }
      if (request.kind === "custom-tool" && request.toolName === "get_weather") {
        return { kind: "approve-once" };
      }
      return {
        kind: "reject",
        feedback: "This demo only approves the get_weather tool.",
      };
    },
  },
});

session.on("assistant.message_delta", (event) => {
  process.stdout.write(event.data.deltaContent);
});
session.on("session.idle", () => process.stdout.write("\n"));

await session.sendAndWait({
  prompt: "What's the weather like in Munich and Bonn?",
});

await client.stop();
process.exit(0);
```

Run it and inspect the response and tool events. The model may call `get_weather` for one or both cities, or answer without using the tool. A well-written description helps the model recognize when the capability fits; if your application requires a lookup, validate that the handler ran and handle the case where it did not.

The permission handler approves only this mock weather tool, once per request. It rejects every other request, including managed approval requests, rather than granting broad access or leaving this standalone demo waiting for a human decision.

<div class="warning" data-title="Treat tools as capabilities">

> A registered tool is a capability: its handler can access whatever your code allows. Keep handlers narrow, validate their inputs, and enforce user authorization inside the handler. For shared or multi-user services, start with `mode: "empty"` and explicitly grant each session only the tools and identity it needs; `coding-agent` is intended for CLI-like coding agents, not a safe shared-server default.

</div>

### 8.4.5 Build an interactive REPL

Wrap the same setup in a chat loop. Create `weather-assistant.ts`:

```ts
import {
  CopilotClient,
  defineTool,
  RuntimeConnection,
} from "@microsoft/copilot-sdk";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import * as readline from "node:readline";

const getWeather = defineTool("get_weather", {
  description: "Get the current weather for a city",
  parameters: {
    type: "object",
    properties: {
      city: { type: "string", description: "The city name" },
    },
    required: ["city"],
  },
  handler: async ({ city }: { city: string }) => {
    const conditions = ["sunny", "cloudy", "rainy", "partly cloudy"];
    const temp = Math.floor(Math.random() * 15) + 15;
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    return { city, temperature: `${temp}°C`, condition };
  },
});

const client = new CopilotClient({ mode: "coding-agent" });
const session = await client.createSession({
  model: "auto",
  events: { streaming: true },
  tools: { definitions: [getWeather] },
  permissions: {
    onRequest: async (request) => {
      if ("managedApprovalRequired" in request && request.managedApprovalRequired) {
        return {
          kind: "reject",
          feedback: "This demo cannot grant a managed approval.",
        };
      }
      if (request.kind === "custom-tool" && request.toolName === "get_weather") {
        return { kind: "approve-once" };
      }
      return {
        kind: "reject",
        feedback: "This demo only approves the get_weather tool.",
      };
    },
  },
});

session.on("assistant.message_delta", (event) => {
  process.stdout.write(event.data.deltaContent);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Weather Assistant (type 'exit' to quit)");
console.log("   Try: 'What's the weather in Berlin?'\n");

const prompt = () => {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      await client.stop();
      rl.close();
      return;
    }
    process.stdout.write("Assistant: ");
    await session.sendAndWait({ prompt: input });
    console.log("\n");
    prompt();
  });
};

prompt();
```

Run it:

```bash
npx tsx weather-assistant.ts
```

Example session (the response and mock weather values vary; inspect tool events to confirm whether the tool ran):

```text
🌤️  Weather Assistant (type 'exit' to quit)
   Try: 'What's the weather in Berlin?'

You: What's the weather in Seattle?
Assistant: It's currently 22°C and cloudy in Seattle.

You: How about Munich and London?
Assistant: Sure - Munich is 27°C and sunny, London is 19°C and rainy.

You: exit
```

## 8.5 How tool calling actually works

When you register a tool, you tell Copilot three things:

1. **What it does** - the `description`.
2. **What it needs** - the JSON-schema `parameters`.
3. **What to run** - the `handler`.

The runtime flow:

```text
User: "What's the weather in Munich?"
   │
   ▼
The model decides whether to request the tool
   │
   ▼
Copilot emits a tool call: get_weather({ city: "Munich" })
   │
   ▼
SDK runs YOUR handler in your process
   │
   ▼
Result returned: { city: "Munich", temperature: "22°C", condition: "sunny" }
   │
   ▼
Copilot composes the final natural-language answer
```

<div class="tip" data-title="Key insight">

> A clear description helps Copilot choose a tool; it does not force the model to call it. Treat descriptions like API documentation, validate inputs and authorization in the handler, and verify any tool execution your workflow depends on.

</div>

## 8.6 Sessions, virtualization and architecture

SDK 2.0 separates the **agent loop** (where the model reasons) from the **environment** (where shell and file operations happen). Your app can keep both in one isolated container, or host the loop on a shared runtime and selectively route work to sandboxes. The SDK provides the runtime and session abstractions; your app or hosting platform remains responsible for creating, securing and cleaning up any external sandbox.

![The agent loop and its shell or files can live in different environments; the app controls how tools are routed.](diagrams/copilot-sdk-2-virtualization.svg)

The Microsoft article [Building modern agentic applications with Microsoft Copilot SDK 2.0](https://commandline.microsoft.com/microsoft-copilot-sdk-2-0-github/) describes these as architecture patterns:

| Pattern | Where the agent loop runs | When it fits |
| --- | --- | --- |
| Isolated runtime per session | In that session's container | Every task needs a shell, custom image, or strong isolation from the start. |
| Shared runtime | One process hosts many sessions; app-owned tools call APIs | Lightweight assistants that do not need a host shell or filesystem. |
| Promotable session | Starts shared, then moves to a dedicated sandbox | Most sessions stay lightweight, but some later need shell or files. |
| Shared loop, sandboxed tools | Shared runtime; host tools execute shell/file operations in a sandbox | You want a shared model loop with controlled, isolated commands. |
| Coordinator and workers | Shared coordinator delegates to isolated worker sessions | Independent long-running or parallel tasks, such as plan/build/review. |
| Mixed | Coordinator uses a sandbox and can delegate to sandboxed workers | Complex workflows that need both immediate actions and parallel work. |

![Six original summaries of the architecture patterns in Microsoft's SDK 2.0 article.](diagrams/copilot-sdk-2-architecture.svg)

These are designs to implement, not six automatic deployment modes. Promotion, worker creation, sandbox lifecycle and routing are responsibilities of your application or platform. Use a hard container boundary for untrusted code; a shared runtime alone does not provide one.

### 8.6.1 Use a shared runtime safely

For a multi-user service, select the minimal `empty` mode and give each session only its own identity and allow-listed tools. The identity comes from your authentication layer; never hard-code a user token.

```ts
import { CopilotClient, defineTool, RuntimeConnection } from "@microsoft/copilot-sdk";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

declare const user: { id: string; githubToken: string };
declare function findOrderForUser(userId: string, orderId: string): Promise<unknown>;

const lookupOrder = defineTool("lookup_order", {
  description: "Look up one of the signed-in customer's orders.",
  parameters: {
    type: "object",
    properties: { orderId: { type: "string" } },
    required: ["orderId"],
  },
  handler: async ({ orderId }: { orderId: string }) =>
    findOrderForUser(user.id, orderId),
});

const baseDirectory = resolve(".copilot-data");
mkdirSync(baseDirectory, { recursive: true });

const client = new CopilotClient({
  mode: "empty",
  runtime: RuntimeConnection.forDefault({ baseDirectory }),
});
const session = await client.createSession({
  model: "auto",
  github: { token: user.githubToken },
  tools: {
    definitions: [lookupOrder],
    availableTools: ["custom:lookup_order"],
  },
});
```

This is an auth-dependent sketch: replace `user` and `findOrderForUser` with values and services from your application. The local `baseDirectory` satisfies the runtime's storage requirement; it is not a tenant boundary. In `empty` mode, ambient CLI-style capabilities are disabled, so add only the tools and MCP servers each session needs. The handler must still enforce authorization, and your application must isolate tenant data; the SDK cannot infer your ownership rules.

### 8.6.2 Resume durable sessions

The runtime records session history in a journal. Save the session ID in your application's database, authorize every resume request, and then reconnect:

```ts
const session = await client.createSession({
  sessionId: "account-42-task-17",
  model: "auto",
});
await session.sendAndWait({ prompt: "Summarize the open support cases." });
await client.stop();

// Later, after verifying the caller owns this session:
const resumed = await client.resumeSession("account-42-task-17", {});
await resumed.sendAndWait({ prompt: "Continue the summary." });
```

The default runtime stores state on its own disk. Configure `sessionFs` and a session filesystem provider when state must live in storage you control, such as tenant-scoped object storage. The provider and its namespace must enforce the isolation your product requires.

### 8.6.3 Choose where the runtime runs

The default is in-process, with the native runtime loaded into your application. For crash isolation or process-wide configuration, choose a spawned runtime. For multiple app instances attaching to one long-running runtime, use the TCP runtime connection. The runtime service is separate from the Copilot CLI.

For a shared live session that multiple clients can attach to and steer concurrently, read about the open **Agent Host Protocol (AHP)**. AHP is distinct from simply resuming a durable session.

### 8.6.4 Connect MCP servers

SDK 2.0 still supports local and remote MCP servers. The session option is now grouped under `mcp.servers`:

```ts
const session = await client.createSession({
  model: "auto",
  mcp: {
    servers: {
      github: {
        type: "http",
        url: "https://api.githubcopilot.com/mcp/",
      },
    },
  },
});
```

For a local stdio server, set `type: "local"` and provide its `command` and `args`. Limit the server's `tools` list to the capabilities the session needs. See the [MCP configuration guide](https://github.com/microsoft/copilot-sdk/blob/main/docs/features/mcp.md) for authentication and transport details.

### 8.6.5 Define custom agents

Bake specialized personas into the session - exactly the same shape as Chapter 1.5:

```ts
const session = await client.createSession({
  model: "auto",
  agents: {
    definitions: [
      {
        name: "pr-reviewer",
        displayName: "PR Reviewer",
        description: "Reviews pull requests for security and maintainability.",
        tools: ["grep", "glob", "view"],
        prompt:
          "You are a code reviewer. Report evidence and risks; do not modify files.",
      },
    ],
    selected: "pr-reviewer",
  },
});
```

The agent's description helps the runtime understand its role; explicitly select it when the session should start with that agent. Use a tool allow-list to keep a specialized agent's capabilities narrow.

### 8.6.6 Set a system message

System-message configuration remains available. Use `append` to add instructions while preserving the SDK's default system message:

```ts
const session = await client.createSession({
  model: "auto",
  systemMessage: {
    mode: "append",
    content:
      "You are an assistant for our engineering team. Be concise and cite the files you relied on.",
  },
});
```

### 8.6.7 Connect to a long-running CLI

For debugging, multi-process setups or sharing a session across consumers, run the CLI headless and connect to it:

```bash
copilot --headless --port 4321
```

```ts
const client = new CopilotClient({ cliUrl: "localhost:4321" });
```

## 8.7 Do this now - challenges

Pick one. They build directly on the lab above.

1. **Add a second tool.** Define `get_time` that returns the current time for a timezone. Ask the assistant *"What's the weather and time in Tokyo?"* - confirm Copilot calls **both** tools in one turn.
2. **Tighten permissions.** Replace `approveAll` with an `onPermissionRequest` handler that logs each tool call and prompts on stdin before approving. Notice how the agent waits politely.
3. **Build a Duck Emporium assistant.** Reuse the user stories and data model 🗄️ from Chapter 3. Define two tools: `search_ducks(query)` reads your seed data; `add_duck(name, theme, price_cents)` appends a new entry. Wire them into a REPL and chat with your shop's inventory.

<div class="tip" data-title="Combine with SDD">

> Treat the assistant itself as a feature. Write a `user-stories/copilot-sdk-assistant.md`, run it through `/sdd-spec → /sdd-plan → /sdd-tasks → /sdd-implement` from Chapter 3. The SDK lab becomes a perfect end-to-end test of your SDD workflow.

</div>

## 8.8 Common mistakes

| Mistake | Symptom | Fix |
| --- | --- | --- |
| Installing `@github/copilot-sdk` or following a v1 tutorial | The package or sample API does not match SDK 2.0. | Install `@microsoft/copilot-sdk` and use the current getting-started guide. |
| Assuming the SDK launches the Copilot CLI | A separate CLI process is missing or unnecessary setup gets added. | The v2 default is an in-process native runtime; choose a process or TCP connection explicitly when you need one. |
| Omitting `mode` | Client creation fails validation. | Select `coding-agent` for a CLI-like agent or `empty` for a shared service. |
| Putting `streaming: true` at the session's top level | No `assistant.message_delta` events arrive. | Set `events: { streaming: true }` in `createSession`. |
| Passing tools as a bare array | Tool definitions are not registered in the current options shape. | Use `tools: { definitions: [myTool] }`; in `empty` mode, also set an explicit allow-list. |
| Treating a shared runtime as a sandbox | A tool or shell can act with more access than intended. | Enforce authorization in app-owned handlers and use a separate sandbox for untrusted execution. |
| Exiting before `await client.stop()` completes | The runtime may not finish clean shutdown. | Await `client.stop()`; short-lived scripts can then exit explicitly, as in the official getting-started sample. |

## 8.9 Key takeaways

1. **The SDK embeds Copilot in your apps.** Go beyond the terminal - wire intelligence into your own tools, services and automations.
2. **Five lines to start.** Create a client, open a session, send a message. That's the minimum viable program.
3. **Streaming makes it feel alive.** Subscribe to `assistant.message_delta` and write as chunks arrive.
4. **Tools are the superpower.** Describe what your code can do; let Copilot decide when to call it.
5. **Same patterns, any language.** TypeScript, Python, Go, Rust, .NET, Java - same shape, same mental model.

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

# Chapter 9 - Security, Sandboxing & Guardrails

An agent can read files, run programs, call tools, and reach services. A clear prompt helps guide its work, but it does not restrict what the agent can access. Use **least privilege**, an execution boundary suited to the task, and human review together.

## 9.1 Choose a boundary before you run the agent

Sandboxing limits what agent-invoked commands and tools can reach. It reduces the impact of a bad command, generated code, or prompt injection; it does not prove that the agent's output is safe. Continue to review edits, commands, tool approvals, and network destinations.

![Five Copilot execution boundaries, with the MXC backend spectrum used by the Copilot CLI local sandbox.](assets/chapter-9-sandbox-model.svg)

| Boundary | Where work runs | Choose it when… | Keep in mind |
| --- | --- | --- | --- |
| **Copilot CLI local sandbox** | On your computer, with filesystem, network, and credential policy applied to agent-run work. | You need the local checkout and want to constrain the CLI's access to your machine. | Uses the local OS process-sandbox backends described below. It is off by default. |
| **VS Code agent sandbox** | In VS Code's Copilot agent session, with filesystem, network, and tool execution controls. | You work in VS Code and want an IDE-managed policy for agent sessions. | This is VS Code's sandbox, not the Copilot CLI sandbox or its MXC configuration. |
| **Container sandbox** | In a containerized development environment, such as Docker Sandboxes. | You want a repeatable toolchain and a boundary around a project workspace. | An image is not, by itself, a complete security policy. Configure credentials, network access, and mounted workspace deliberately. |
| **GitHub cloud sandbox** | In an ephemeral Linux environment hosted by GitHub; the session and commands run away from your computer. | You want to offload execution or isolate agent work from local files and compute. | This is distinct from local sandboxing, costs are usage-based, and organization policy controls availability. |
| **Custom environment / VM** | On an environment you register and operate, such as a Linux machine or Codespace. | You need a managed OS image, tools, or dependencies that the standard cloud sandbox does not provide. | You own the image, credentials, patching, access policy, and lifecycle. This is not a switch that turns a local sandbox into a VM. |

These are execution choices, not model choices. A **local sandbox** constrains processes on your device. A **container image** packages an operating system and tools for a container runtime. A **VM or custom environment** gives you a separately managed machine boundary. GitHub's hosted **cloud sandbox** is a GitHub-operated ephemeral Linux environment. In the linked GitHub docs, a custom environment is a Linux machine or Codespace that you register and manage; the local/cloud sandbox settings do not provide a generic VM-image selector. Choose the narrowest option that gives the agent the files and tools it needs.

### Where Microsoft eXecution Container (MXC) fits

[Microsoft eXecution Container (MXC)](https://github.com/microsoft/mxc) is an open-source policy model and execution layer, not a particular container image or a VM. Its SDKs let a trusted host describe a JSON policy for resources such as files, network access, and UI interaction, then translate that policy to a supported containment backend. SDKs are available for TypeScript/JavaScript (`@microsoft/mxc-sdk`), .NET, and Rust.

MXC covers a spectrum of backends: OS process isolation, containers and isolated sessions, and virtualized environments such as VMs or microVMs. Examples include Seatbelt on macOS; Bubblewrap or LXC on Linux; and ProcessContainer/BaseContainer, Windows Sandbox, WSLC, MicroVM, Hyperlight, and IsolationSession on Windows. Support and maturity differ by backend; several Windows options are experimental. A common policy model does **not** mean every backend enforces every policy feature equally.

GitHub Copilot CLI's local sandbox currently uses the lightweight OS-process end of this spectrum: Seatbelt on macOS, Bubblewrap on Linux, and ProcessContainer/BaseContainer on Windows. It does not start a container or VM for each command. VS Code has its own separate agent sandbox, while Docker and GitHub cloud sandboxes are separate execution products.

The host remains responsible for deciding what access to grant. A model suggestion cannot grant itself more authority. Code that runs outside the containment boundary, remote services, and capabilities not covered by the active policy need separate controls.

<div class="warning" data-title="A sandbox is one layer, not a security review">

> Prompt injection can still influence an agent to misuse the tools and data it is allowed to access. Remote MCP servers are not contained by the local sandbox. Keep credentials out of prompts and files, grant the minimum network and filesystem access, and review consequential actions.

</div>

## 9.2 Hands-on: constrain a Copilot CLI session

This lab uses a harmless training file and public, read-only HTTP requests. Do not substitute a real secret, personal file, internal host, or production endpoint.

### Enable and inspect local sandboxing

Start Copilot CLI in a disposable repository or workshop project:

```bash
copilot
```

In the interactive session, enable the sandbox and inspect its status and effective policy:

```text
/sandbox enable
/sandbox status
/sandbox policy
```

`/sandbox` and `/sandbox config` open the same interactive configuration. Use Tab to move among General, Credentials, Filesystem, and Network; Esc saves and closes it. Run `/sandbox policy` after configuring and after starting a fresh or continued session. The effective-policy report is more useful than checking a saved setting alone.

When enabled, the default local policy is:

| Resource | Default |
| --- | --- |
| Current working directory | Read/write |
| Repository `.git` directory | Read/write |
| Rest of the repository | Read-only |
| Developer-tool access | On; includes tool/configuration directories and caches |
| Outbound network | On |
| Local network | Off |
| Git and `gh` credentials | Masked and supplied by a proxy only to permitted destinations. |

The sandbox is off by default. You can enable it persistently in your personal `~/.copilot/settings.json` under the `sandbox` key; repository-level sandbox settings are not supported:

```json
{
  "sandbox": {
    "enabled": true
  }
}
```

To pass a masked environment variable only to a trusted destination, configure its name and allowed host; never put the secret value in the settings file:

```json
{
  "sandbox": {
    "enabled": true,
    "credentials": {
      "envVars": {
        "EXAMPLE_API_TOKEN": {
          "injectHosts": ["api.example.com"]
        }
      }
    }
  }
}
```

Do not also pass the same variable through `--secret-env-vars`. On macOS, system keychain access is off by default; the advanced setting `sandbox.userPolicy.seatbelt.keychainAccess` controls it in personal settings.

The General tab includes **Allow sandbox bypass** (on by default), **Sandbox MCP servers**, and **Sandbox LSP servers** (on by default). A bypassed command runs outside the sandbox and can see real environment values, bypassing credential masking. Remote MCP servers are never sandboxed. Managed settings can enforce `sandbox.enabled`, `sandbox.allowBypass`, and `sandbox.failIfUnavailable`; the last setting makes a command fail if its sandbox cannot start. Managed entries are marked `(managed)` and cannot be changed in the CLI. Organizations can distribute local policy through Intune or other MDM.

The Git credential proxy matches the original request's host, port, and repository path. The `gh` credential proxy supplies credentials only to GitHub's documented domains: `github.com`, `api.github.com`, and `uploads.github.com`. Do not put credentials in prompts or pass them as ordinary environment variables.

### Exercise A: deny a file outside the workspace

1. Create a file outside the repository with a fake marker such as `TRAINING_ONLY_NOT_A_SECRET`. Keep it out of your home configuration and never use a real secret. On macOS or Linux:

   ```bash
   mkdir -p "$HOME/copilot-sandbox-lab"
   printf '%s\n' 'TRAINING_ONLY_NOT_A_SECRET' > "$HOME/copilot-sandbox-lab/private-note.txt"
   ```

   On Windows PowerShell:

   ```powershell
   $lab = Join-Path $env:TEMP 'copilot-sandbox-lab'
   New-Item -ItemType Directory -Force $lab | Out-Null
   Set-Content (Join-Path $lab 'private-note.txt') 'TRAINING_ONLY_NOT_A_SECRET'
   ```

2. In `/sandbox`, add the file's **absolute path** to the denied filesystem paths. Confirm it appears in `/sandbox policy`.
3. Ask the agent to read the path twice: first through a shell command (`cat` on macOS/Linux or `Get-Content` in PowerShell), then with its built-in file-reading tool.
4. Compare the outcomes. Shell commands and search tools such as `grep` and `glob` are subject to OS enforcement. The CLI's in-process view/edit tools check the policy in software, so treat that result as best-effort rather than the same hard boundary.
5. If the shell can read the denied path, stop and inspect the canonical path, platform support, and active policy. Keep the fixture for the VS Code exercise; the cleanup steps follow both labs.

<div class="warning" data-title="Create the file before denying it">

> In Copilot CLI, denying a path that does not exist can make the sandbox create a **directory** at that path. Create the training file first, then add its exact absolute path to the deny list.

</div>

The workspace itself remains available. The point is to deny one unrelated path, not to make the repository unusable.

### Exercise B: restrict an outbound request

1. Leave outbound access on. Add an **Allow** host rule for `api.github.com` (enter the host only; no scheme, path, or port).
2. Ask the agent to run `curl -sI https://api.github.com`, then `curl -sI https://example.com`. On Windows, use `curl.exe` if `curl` resolves to a PowerShell alias. The first request should succeed; once an allow rule exists, the non-matching host should be blocked. A matching **Deny** rule always wins.
3. Ask the agent's `web_fetch` tool to fetch `https://api.github.com` and `https://example.com` as well. Compare its results with the shell requests.
4. Turn outbound access off and retry the allowed `api.github.com` request. It should now be blocked too.
5. Turn outbound access back on and remove the temporary host rule, or restore your previous network settings.

On Windows, enable **Allow local network** for domain rules, the credential proxy, and credential masking; this also permits private-network access. Ordinary built-in web requests to public endpoints do not by themselves require that setting. Host rules still apply to permitted local connections when outbound access is off. Windows enforcement relies on programs honoring proxy settings, so it is weaker than macOS/Linux OS network filtering. Keep local-network access off unless this exercise requires it, and do not access internal hosts.

### Clean up the CLI lab

Remove the temporary deny rule from the CLI filesystem policy and restore any other settings you changed. After completing the VS Code lab, delete the fixture:

```bash
rm "$HOME/copilot-sandbox-lab/private-note.txt"
rmdir "$HOME/copilot-sandbox-lab"
```

In Windows PowerShell:

```powershell
Remove-Item (Join-Path $env:TEMP 'copilot-sandbox-lab\private-note.txt')
Remove-Item (Join-Path $env:TEMP 'copilot-sandbox-lab')
```

### CLI sandbox commands at a glance

| Command | Use |
| --- | --- |
| `/sandbox` or `/sandbox config` | Open configuration; Tab switches among General, Credentials, Filesystem, and Network; Esc saves and closes. |
| `/sandbox policy [COMMAND]` | Show effective policy, or preview how it applies to a command without running it; for example, `/sandbox policy npm install`. |
| `/sandbox status` | Show whether the current session is sandboxed. |
| `/sandbox enable` / `/sandbox disable` | Enable or disable local sandboxing, subject to managed policy and bypass rules. |
| `copilot --sandbox` | Start a session with sandboxing. |
| `copilot --sandbox -p "..."` | Run a prompt with the single-session sandbox option. |
| `copilot --no-sandbox` | Disable sandboxing for a session only when policy permits; it cannot override a managed requirement. |
| `copilot --continue` | Continue the previous conversation after enabling sandboxing, so the session restarts with the updated policy. |
| `/add-dir PATH` | Grant a path read/write access for the current session only, subject to managed policy. |
| `/statusline` | Configure the status line; it can show whether sandboxing is active. |
| `copilot --cloud` | Start an interactive GitHub cloud-sandbox session; this is a different execution target. |

### Check local sandbox platform support

Copilot CLI's local sandbox relies on platform-specific OS features. Check the support requirements before enabling it; do not treat an unsandboxed fallback as equivalent.

| Platform | Requirements and limitations |
| --- | --- |
| macOS | macOS 15 or later; Seatbelt. |
| Linux | glibc Linux, Bubblewrap 0.5 or later, `slirp4netns`, `util-linux` 2.35 or later, and `iptables`. On Debian/Ubuntu, install them with `sudo apt-get install bubblewrap slirp4netns util-linux iptables`. |
| Windows | Windows 11 25H2 with KB5124010 or Windows 11 26H1 with KB5124006; ProcessContainer/BaseContainer. |
| Unsupported | Alpine/musl Linux and WSL1. |

## 9.3 Hands-on: repeat the policy check in VS Code

VS Code has its **own agent sandbox**. Do not configure it through Copilot CLI's `/sandbox` command or assume that MXC's CLI policy carries over.

Open a Copilot-harness Agent session in a local workspace. Use the permissions picker to enable **Sandboxing for terminal** for this session. This control is for the Copilot harness; Claude and Codex harnesses have their own sandbox controls. **Allow all** tool approvals do not disable the sandbox.

Enter `/sandbox policy` in the chat input to open the session's effective-policy report in the editor. For new sessions, configure the default with `chat.agent.sandbox.enabled` (`"on"` or `"off"`, default `"off"`).

### Exercise: deny the lab file and allow one domain

Add these settings to your VS Code `settings.json`. Replace the placeholder with the **same absolute path** to `private-note.txt` that you created in Exercise A. Paths in settings are literal: do not leave placeholders or use `$HOME`/environment-variable expansion.

```jsonc
{
  "chat.agent.sandbox.enabled": "on",
  "chat.agent.sandbox.fileSystem.userConfiguredPaths": {
    "deniedPaths": [
      "/Users/YOUR_NAME/copilot-sandbox-lab/private-note.txt"
      // Linux example: "/home/YOUR_NAME/copilot-sandbox-lab/private-note.txt"
      // Windows example: "C:\\Users\\you\\AppData\\Local\\Temp\\copilot-sandbox-lab\\private-note.txt"
    ]
  },
  "chat.agent.sandbox.network.allowNetwork": true,
  "chat.agent.sandbox.network.allowLocalNetwork": false,
  "chat.agent.sandbox.network.allowedDomains": ["api.github.com"],
  "chat.agent.sandbox.network.deniedDomains": [],
  "chat.agent.sandbox.allowUnsandboxedCommands": false,
  "chat.agent.sandbox.mcpServers": true,
  "chat.agent.sandbox.lspServers": true
}
```

The Windows example escapes backslashes as JSON requires. On Windows, set `chat.agent.sandbox.network.allowLocalNetwork` to `true` when using domain rules or credential masking; that widens access to local and private networks. Keep it `false` elsewhere unless your task needs it.

The filesystem setting accepts `readwritePaths`, `readonlyPaths`, and `deniedPaths` with absolute paths. If rules overlap, **denied wins, then read-only, then read/write**. `allowDevToolAccess` defaults to `true`; this lab leaves that default in place so `curl` and other developer tools remain available. Turning it off can prevent tools from running; if you do, grant the required tool and supporting paths explicitly through `readonlyPaths`.

In the Network settings, `allowNetwork` defaults to `true`; setting it to `false` also blocks the integrated browser. `allowLocalNetwork` defaults to `false`. A non-empty `allowedDomains` list restricts outbound access to those domains; `deniedDomains` blocks matching domains and takes precedence. Restart VS Code after changing domain rules.

VS Code can also sandbox MCP and LSP servers with `chat.agent.sandbox.mcpServers` and `chat.agent.sandbox.lspServers` (LSP sandboxing defaults to `true`). Credential settings include `chat.agent.sandbox.credentials.authenticategit`, `authenticategh`, and `envVars`; each environment-variable entry can use `injectHosts` to scope credential injection.

By default, `chat.agent.sandbox.allowUnsandboxedCommands` is `true`: if a command cannot run inside the sandbox, VS Code can show an **Allow Outside Sandbox** prompt. Set it to `false` to fail closed. For filesystem permission prompts, choose the narrowest approval scope: **Allow for This Session**, **Workspace**, or **User**, or choose **Skip**.

1. Restart VS Code after changing domain rules. Open a new Copilot-harness Agent session, enable **Sandboxing for terminal** in the permissions picker, and run `/sandbox policy`. Confirm the denied path and `api.github.com` allow rule.
2. Ask the agent to read the denied file with a shell command and with its file-reading tool; both should be denied. Then ask it to fetch `https://api.github.com` and `https://example.com` and compare the results with the allow list.
3. Give this prompt: **“Create `sandbox-lab-output.md` in the workspace with exactly the sentence `VS Code sandbox write test.` Do not edit any other files.”**
4. Open the new file and inspect the workspace changes in VS Code. Confirm that only this file changed, then discard the test by deleting it yourself. Restore your original settings. After the exercise, remove the shared fixture using the platform-appropriate cleanup commands above.

To scope an environment credential, use a variable name and its permitted hosts; never add a secret value to `settings.json`:

```json
{
  "chat.agent.sandbox.credentials.envVars": {
    "EXAMPLE_API_TOKEN": {
      "injectHosts": ["api.github.com"]
    }
  }
}
```

<div class="warning" data-title="Sandboxing inside a Dev Container">

> Running the VS Code sandbox inside a Dev Container requires relaxing container isolation with `seccomp=unconfined`, `apparmor=unconfined`, and `systempaths=unconfined`, plus access to `/dev/net/tun`. That weakens the outer container boundary. Do this only in a disposable, trusted development environment and understand that you are trading away part of the container's protection.

</div>

### VS Code platform requirements

| Platform | Requirements and limitations |
| --- | --- |
| macOS | macOS 15 or later. |
| Linux / WSL2 | glibc Linux or WSL2, Bubblewrap 0.5 or later, `slirp4netns`, `util-linux` 2.35 or later, and `iptables`. For Debian/Ubuntu, install the packages with `sudo apt-get install bubblewrap slirp4netns util-linux iptables`. |
| Windows | Windows 11 25H2 with KB5124010 or Windows 11 26H1 with KB5124006. Support is experimental in VS Code. |
| Unsupported | Alpine/musl Linux and WSL1. |

## 9.4 Run Copilot in a Docker Sandbox

Docker Sandboxes provide a containerized workspace and a reproducible starting point; they are separate from Copilot CLI's MXC sandbox and GitHub's cloud sandbox. Current Docker guidance recommends v3 kits: built-in agent names resolve to Debian-based kits, while `docker/sandbox-templates` images are older, separately published Ubuntu images.

For the built-in Copilot workload, store authentication as a Docker Sandbox secret rather than baking a token into an image. The token must have Copilot access:

```bash
sbx secret set github --command 'gh auth token'
sbx run copilot ~/my-project
```

The path is optional when you have already changed into the project directory. A directly mounted workspace is read/write, and changes appear on the host immediately. For a Git repository, use clone mode to keep agent edits in an in-sandbox clone until you fetch or push them:

```bash
sbx run --clone copilot ~/my-project
```

Copilot starts as `copilot --yolo` by default, which allows broad automatic approval. Treat this as a high-risk mode: use only a project you trust, prefer clone mode, and review all changes. You can append Copilot arguments after `--`:

```bash
sbx run copilot -- -p "review this PR"
```

To add a project toolchain, first create a v3 **mixin** with its Dockerfile and YAML descriptor, then attach it to the built-in Copilot workload. This is the current documented customization path; the workload retains its launch behavior and credentials:

```bash
sbx run copilot --kit ./node-toolchain ~/my-project
```

To publish the mixin, use Docker Buildx as shown in the [current tool-mixin authoring guide](https://docs.docker.com/ai/sandboxes/customize/author/tool-mixins/). Then use the same published reference with `--kit`:

```console
docker login
docker buildx build ./node-toolchain -f ./node-toolchain/node-toolchain.yaml -t docker.io/my-org/node-toolchain:v1 --push
sbx run copilot --kit docker.io/my-org/node-toolchain:v1 ~/my-project
```

### Conceptual: build a custom Copilot workload image

If you specifically need to change the Copilot base image, author a v3 **workload** kit with a Dockerfile and YAML descriptor. The following illustrates the image layer only; it is **not a complete runnable kit**. The descriptor must declare the Copilot launch contract, network policy, and credential capability. Current Docker docs do not provide a complete custom Copilot v3 descriptor, so do not publish or run this example without supplying and validating that configuration against the [base-image workload guide](https://docs.docker.com/ai/sandboxes/customize/author/base-images/), [kit capabilities](https://docs.docker.com/ai/sandboxes/customize/author/capabilities/), and [credential guidance](https://docs.docker.com/ai/sandboxes/configuration/credentials/).

```dockerfile
FROM docker/sandbox-templates:copilot
USER root
RUN apt-get update \
    && apt-get install -y --no-install-recommends jq \
    && rm -rf /var/lib/apt/lists/*
USER agent
ENTRYPOINT ["copilot"]
CMD []
```

The base image is an older, previously published Copilot image, not the current built-in v3 workload. In a v3 kit, capabilities from a published base kit do not carry over; declare the policy and credentials in your own descriptor. When the descriptor is complete and verified, publish and run the **same** image reference:

```console
docker login
docker buildx build ./copilot-node -f ./copilot-node/copilot-node.yaml -t docker.io/my-org/copilot-node:v1 --push
sbx run docker.io/my-org/copilot-node:v1 ~/my-project
```

To snapshot a configured sandbox, current Docker usage docs still document `sbx template save <sandbox> <name>:v1 --output <file>`. A snapshot captures the container filesystem, not mounted workspace files; secrets written into that filesystem are captured too. Treat a snapshot as an image, not a v3 kit with its own policy.

Docker Sandboxes do not inherit user-level host configuration; only project-level configuration is available inside the sandbox. Never store credentials in the Dockerfile, image, workspace, or snapshot.

## 9.5 Use GitHub cloud sandboxes

GitHub cloud sandboxes run the **whole Copilot session** in an ephemeral, GitHub-hosted Linux environment. The session does not use your local checkout or compute; repositories are cloned into the remote environment. Sessions can be stopped and resumed across supported clients, restoring their snapshot and in-progress work.

You can start cloud sessions from GitHub.com chat, GitHub Mobile, Slack, Microsoft Teams, the GitHub Copilot app, VS Code, JetBrains (preview), or the Copilot SDK. In Copilot CLI, start a single interactive session with:

```bash
copilot --cloud
```

This option is interactive only; do not combine it with `-p` or `-i`. In clients that let you choose between **Cloud** and **Actions**, choose at session start; you cannot change the execution environment afterward. Choose Actions when you need `copilot-setup-steps.yml` (including OIDC), a larger or self-hosted runner, or Windows. Otherwise, Cloud provides the standard managed Linux environment.

Cloud session network access follows the cloud agent firewall allowlist. Changes to the allowlist apply to new sessions, not sessions already running. You can personalize cloud sandboxes through [Copilot customization](https://github.com/copilot/customize) and a dotfiles repository with a root `.copilot` directory for instructions, skills, and custom agents. Dotfiles are copied when a sandbox is created or resumed; install scripts do not run, and this personalization does not apply to Actions sessions.

For an organization or enterprise, cloud access is governed by the **Copilot in the cloud** policy, enabled by default, and spending is controlled through budgets per SKU. Review both before enabling the capability. Billing meters are **$0.000024 per vCPU-second**, **$0.000003 per GiB-second of memory**, and **$0.005 per GiB-month of storage**. Local sandboxing is included in the Copilot seat.

## 9.6 Which model should you use?

Model choice affects the quality, speed, and cost of reasoning; it does **not** change what files, network destinations, or credentials a sandbox permits. Start with **Auto** unless you have a reason to select a model yourself.

| Task | Model choice |
| --- | --- |
| A bounded edit, test fix, or routine command | Auto or a fast, capable coding model is usually sufficient. Keep the task narrow and review the diff. |
| Multi-step implementation or unfamiliar code | Choose a stronger reasoning/coding model when the task benefits from planning across files and tests. |
| Threat modeling or security-sensitive review | Use a strong reasoning model to help identify cases and propose tests, but independently verify its claims. Model output is not an audit or an access-control decision. |
| Repetitive work with known steps | Use a fast model with explicit acceptance criteria and restricted tools; a deterministic script may be safer and cheaper. |
| Unattended work, `--yolo`, or cloud batch tasks | Prefer a stronger model for better planning, but tighten the sandbox, network, credentials, and allowed tools because nobody is reviewing each step as it runs. |

Choose from models available under your Copilot plan and organization policy. Re-evaluate the choice as the model catalog changes. For every model, keep the same least-privilege policy, credential hygiene, approval discipline, and human review.

## 9.7 Security checklist

- **Know where the session runs:** local, Docker Sandbox, GitHub cloud sandbox, Actions runner, or your custom environment.
- **Check the effective policy:** confirm denied and allowed paths, outbound and local-network access, and credential handling.
- **Minimize what tools can reach:** remove temporary grants and host allow rules after the task.
- **Protect secrets:** do not place secrets in prompts, source files, images, or example fixtures; expose a credential only to the hosts that need it.
- **Remember the boundary:** remote MCP servers and external services need their own controls; a local process sandbox does not contain them.
- **Review before execution or merge:** sandboxing reduces blast radius; it does not make generated commands or code trustworthy.

### References

- [About cloud and local sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes)
- [Configure local sandbox settings](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
- [Manage cloud sandboxes for an organization or enterprise](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
- [VS Code agent sandbox](https://code.visualstudio.com/docs/agents/run/agent-sandboxing)
- [Cloud and local sandboxes public preview announcement](https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/)
- [Use GitHub Copilot in Docker Sandboxes](https://docs.docker.com/ai/sandboxes/agents/copilot/)
- [Docker Sandboxes kits](https://docs.docker.com/ai/sandboxes/customize/)
- [Docker Sandboxes base images](https://docs.docker.com/ai/sandboxes/customize/author/base-images/)
- [Build a Docker Sandboxes tool mixin](https://docs.docker.com/ai/sandboxes/customize/author/tool-mixins/)
- [Use Docker Sandboxes kits](https://docs.docker.com/ai/sandboxes/customize/use-kits/)
- [Docker Sandboxes usage and workspace modes](https://docs.docker.com/ai/sandboxes/usage/)
- [Microsoft MXC](https://github.com/microsoft/mxc)


# Wrap-up

You have learned how to:

- Navigate GitHub Copilot across the IDE, CLI, agent harnesses, instructions, prompts, custom agents, skills and MCP.
- Use a repeatable, reviewable development loop: **Spec → Plan → Tasks → Implement.**
- Apply that loop with an agent or, optionally, with spec-kit.

## Where to go next

- [GitHub Copilot docs](https://docs.github.com/en/copilot)
- [Awesome Copilot](https://github.com/github/awesome-copilot) - community skills, agents, instructions, prompts
- [spec-kit](https://github.com/github/spec-kit)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [GitHub Copilot modernization](https://learn.microsoft.com/azure/developer/github-copilot-app-modernization/overview) and the [modernization agent / Modernize CLI](https://github.com/microsoft/modernize-cli)
- The original [GH Copilot HoL](https://moaw.dev/workshop/gh:Philess/GHCopilotHoL/main/docs/) - broader foundational GitHub Copilot product tour this workshop builds on
- [squad](https://github.com/bradygaster/squad) - human-directed AI development team through GitHub Copilot

<div class="tip" data-title="One thing to try tomorrow">

> Pick the next ticket in your backlog. Before writing a line of code, open Agent mode and run your `/sdd-spec` skill from Chapter 3. Time-box it to 20 minutes. Notice how much sharper your understanding of the work becomes - that is the real win of SDD.

</div>

Happy spec-driving! 🚀

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}:root.dm-dark{--background:#0d1117;--text:#e6edf3;--text-medium:#9da7b3;--border-color:#30363d;--primary-light:#11263b;--accent-light:#3a1220;--accent-2-light:#0f2a31;--accent-3-light:#0f2b2b;--primary-dark:#58a6ff;--neutral-light:#161b22;--success-light:#12261a;--warning-light:#2d1f0f;--important-light:#2d1413;--task-light:#2b2712}.dm-dark body{background:var(--background);color:var(--text)}.dm-dark nav.sidebar{background:#161b22!important}.dm-dark code:not(pre>code),.dm-dark blockquote code:not(pre>code){background:#21262d!important;color:#79c0ff;border-color:var(--border-color)}.dm-dark tr:nth-child(2n){background:#161b22}.dm-dark th,.dm-dark td{border-color:var(--border-color)}.dm-dark img{background:#fff}#dm-toggle{position:fixed;top:.6rem;right:1rem;z-index:1000;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:var(--border-radius);padding:.25rem .6rem;font-size:1.1rem;cursor:pointer}#dm-toggle:hover{background:rgba(255,255,255,.3)}</style><button id="dm-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode" onclick="var d=document.documentElement.classList.toggle('dm-dark');try{localStorage.setItem('moaw-theme',d?'dark':'light')}catch(e){}">🌓</button><img hidden alt="" src="data:," onerror="var r=document.documentElement,t;try{t=localStorage.getItem('moaw-theme')}catch(e){}r.classList.toggle('dm-dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)">

## Cheat sheet - when to use what

| Tech | Use when… | Concrete example |
| --- | --- | --- |
| copilot-instructions.md / AGENTS.md | You want **every agent interaction** in this repo to follow the **same rules**. Think: architecture, naming, style, forbidden patterns. | "This repo uses hexagonal architecture. Never put business logic in controllers. All prices in EUR cents." |
| Agent Skills | You **know** that your agent needs to do something **defined** beyond reading and writing code: run tests, call an API, query a database 🗄️, fetch context from an external system. With `disable-model-invocation: true` it becomes a reusable workflow that you start yourself with `/name`, and it works in the Copilot harness, the Local harness and the CLI. | Give the review agent a skill to run `npm test` and include results in its assessment. Or run `/sdd-spec browse-catalog` from Chapter 3. |
| Prompt Files | You want a reusable, parameterized prompt in a VS Code **Local** harness session (not loaded by the Copilot harness or the CLI). | `/review-endpoint` that asks for the endpoint via `${input:endpoint}`. |
| Custom Agents | You have a recurring task that needs a specific persona, toolset, or workflow. **How to solve the task is deliberately open.** | A `@code-reviewer` agent that checks every change against your security checklist and domain rules. The kind of changes are the **undefined variable** in this scenario. |
| Spec-Driven Development | You want the **one agent** to implement a feature from a structured definition: requirements, acceptance criteria, constraints up front. **For more complex scenarios.** spec-kit is one ready-made way to run this loop. | A spec for "loyalty points": earn 1 point per EUR, redeem at 100 points = 5 EUR discount. Spec defines the domain model, API contract, and edge cases before the agent writes a line of code. |
| Squad | A task spans multiple concerns (API, database 🗄️, tests, docs) and you want coordinated work across **multiple agents**. **For even more complex scenarios.** | Implementing the loyalty feature end to end: one agent handles the domain logic, another the migration, another the test suite. |
