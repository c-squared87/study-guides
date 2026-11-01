# WGU Introduction to IT — Day 2 Study Guide

## Topic: Computer Hardware, Software & Operating Systems

### Today's Goal

By the end of Day 2, you should be able to:

1. Identify the major components of a computer system.
2. Explain the purpose of the CPU, RAM, storage, motherboard, and GPU.
3. Distinguish between volatile and non-volatile memory.
4. Explain the difference between HDD and SSD storage.
5. Explain what an operating system does.
6. Distinguish between system software and application software.
7. Explain the basic relationship between hardware, the operating system, and applications.
8. Explain the difference between a client and a server.
9. Understand why organizations use servers rather than relying only on individual computers.

---

# 1. The Basic Computer Model

At the most basic level, a computer system does four things:

**Input → Processing → Storage → Output**

For example, imagine entering a number into a calculator application.

**Input**

You type:

`25 + 75`

↓

**Processing**

The CPU performs the calculation.

↓

**Storage**

The computer may temporarily hold the information in memory.

↓

**Output**

The application displays:

`100`

Almost every computer system can be understood through some variation of this model.

---

# 2. Hardware vs. Software

Remember from Day 1:

> **Hardware is the physical equipment.**

> **Software is the instructions that tell the hardware what to do.**

For example:

### Hardware

- CPU
- RAM
- SSD
- Keyboard
- Monitor
- Motherboard

### Software

- Windows
- macOS
- Linux
- Microsoft Excel
- Chrome
- Database applications

The two depend on each other.

You can't run Excel without hardware.

But hardware without software isn't particularly useful as a general-purpose computer.

---

# 3. The CPU — Central Processing Unit

The **CPU** is often described as the "brain" of the computer.

That's a useful beginner analogy, although it isn't technically perfect.

The CPU executes instructions and performs calculations.

For example, when software tells the computer:

> "Add these two numbers."

The CPU performs the underlying operations necessary to accomplish that instruction.

### Important CPU concepts

You may encounter:

- CPU cores
- Clock speed
- Threads
- Cache

For this course, focus primarily on:

> **The CPU executes instructions and performs processing.**

---

# 4. CPU Cores

Modern CPUs commonly have multiple cores.

For example:

- 2-core CPU
- 4-core CPU
- 8-core CPU
- 16-core CPU

A core can execute instructions.

Multiple cores allow a CPU to work on multiple tasks concurrently.

### Simple analogy

Imagine a restaurant kitchen.

### One core

One cook.

### Four cores

Four cooks.

More cooks can potentially handle more work simultaneously.

However, simply having more cores doesn't automatically make every application four times faster.

The software and workload matter.

---

# 5. RAM — Random Access Memory

RAM is the computer's **short-term working memory**.

When you open an application, the computer loads information into RAM so the CPU can access it quickly.

For example, imagine opening:

- Chrome
- Excel
- Teams
- Spotify

All of those programs need memory while they're running.

---

## RAM is volatile

This is an important term.

**Volatile memory loses its contents when power is removed.**

If you turn off your computer, the information stored in RAM disappears.

Think:

> **RAM = temporary workspace**

---

# 6. Storage

Storage is where information is kept for longer periods.

Examples:

- SSD
- HDD
- USB drive
- External hard drive

Unlike RAM, storage is generally **non-volatile**.

That means information remains when the computer is turned off.

For example:

> You save a Word document.

The document is stored on the computer's storage device.

---

# 7. RAM vs. Storage

This distinction is extremely important.

| RAM | Storage |
|---|---|
| Short-term working memory | Long-term data storage |
| Usually volatile | Non-volatile |
| Very fast | Generally slower than RAM |
| Used while programs are running | Stores files and applications |
| Contents disappear when power is lost | Contents remain |

### Analogy

Think of your desk.

**RAM = what's currently on your desk**

**Storage = what's in your filing cabinet**

Your desk is where you're actively working.

Your filing cabinet stores things for later.

---

# 8. HDD vs. SSD

Two common types of storage are:

## HDD — Hard Disk Drive

Uses spinning magnetic disks.

### Advantages

- Usually inexpensive
- Large capacities available

### Disadvantages

- Mechanical
- Slower
- More vulnerable to physical damage

---

## SSD — Solid State Drive

Uses flash memory and has no moving mechanical disk.

### Advantages

- Faster
- More resistant to physical shock
- Lower latency

### Disadvantages

- Historically more expensive per GB, although prices have decreased substantially

For modern computers, SSDs are extremely common.

---

# 9. The Motherboard

The motherboard is the primary circuit board connecting many of the computer's components.

It allows components such as:

- CPU
- RAM
- Storage
- GPU
- Network hardware

to communicate with each other.

Think of it as the computer's **central connection platform**.

---

# 10. GPU — Graphics Processing Unit

The GPU is designed to perform graphics-related processing.

GPUs are especially important for:

- Gaming
- 3D graphics
- Video processing
- Scientific computing
- Machine learning
- AI workloads

Originally, GPUs were primarily associated with graphics.

Today, they are also extremely important for AI because they can perform many calculations simultaneously.

This is one of the first connections you'll encounter between **traditional computer hardware and modern AI**.

---

# 11. Input and Output Devices

Computers need ways to interact with the outside world.

## Input Devices

Send information **into** the computer.

Examples:

- Keyboard
- Mouse
- Microphone
- Camera
- Scanner
- Touchscreen

## Output Devices

Present information **from** the computer.

Examples:

- Monitor
- Speakers
- Printer
- Projector

Some devices can perform both functions.

For example:

> A touchscreen can display information and receive touch input.

---

# 12. What Is an Operating System?

The operating system, or **OS**, is the core system software that manages a computer's resources and provides an environment for applications to run.

Common operating systems include:

- Microsoft Windows
- macOS
- Linux
- Android
- iOS

The operating system acts as an intermediary between applications and hardware.

A simplified model:

**Application**

↓

**Operating System**

↓

**Hardware**

For example:

You click "Print" in Microsoft Word.

Word doesn't need to directly control the printer's hardware.

Instead, it communicates through the operating system and associated drivers/services.

---

# 13. What Does an Operating System Do?

An operating system performs many important functions.

## Resource Management

Manages:

- CPU
- RAM
- Storage
- Devices

## File Management

Provides ways to:

- Create files
- Open files
- Rename files
- Delete files
- Organize files

## Process Management

Controls running programs and processes.

## Device Management

Helps software communicate with hardware devices.

## User Interface

Provides ways for users to interact with the computer.

Examples:

- Windows desktop
- macOS Finder
- Linux desktop environments
- Command-line interfaces

---

# 14. System Software vs. Application Software

This distinction is worth memorizing.

## System Software

Supports the operation of the computer itself.

Examples:

- Operating systems
- Device drivers
- System utilities

## Application Software

Helps users perform specific tasks.

Examples:

- Microsoft Word
- Excel
- Chrome
- Photoshop
- Salesforce
- Your company's analytics application

### Simple rule

Ask:

> "Is this software primarily helping operate the computer, or helping the user accomplish a task?"

Operating system → **System software**

Excel → **Application software**

---

# 15. What Is a Server?

A server is a computer or software system that provides services or resources to other computers or systems.

The other systems are commonly called **clients**.

For example:

**Client**

Your laptop

↓

**Network**

↓

**Server**

Web server

The server might:

- Deliver a webpage
- Process an application request
- Store files
- Provide database services
- Authenticate users

---

# 16. Client vs. Server

## Client

Usually requests or consumes a service.

Examples:

- Laptop
- Smartphone
- Web browser
- Mobile application

## Server

Provides a service.

Examples:

- Web server
- Database server
- File server
- Authentication server

The distinction is about **role**, not necessarily physical size.

A server doesn't have to be a giant machine sitting in a data center.

A server can be software running on a computer.

---

# 17. A Real-World Example

Imagine you open your company's analytics application.

You are using:

**Your laptop**

↓

**Web browser**

↓

**Network**

↓

**Application server**

↓

**Database server**

The laptop is acting as a **client**.

The application server provides the application.

The database server provides data.

This is the beginning of understanding **client/server architecture**.

---

# 18. Virtual Machines

You may encounter the term **virtual machine (VM)**.

A virtual machine is a software-based computer that runs on physical hardware.

For example, one physical server might run:

```text
Physical Server
│
├── Virtual Machine 1
│   └── Application Server
│
├── Virtual Machine 2
│   └── Database Server
│
└── Virtual Machine 3
    └── Web Server