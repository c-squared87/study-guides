# WGU Introduction to IT — Day 1 Study Guide

## Topic: What Is Information Technology?

### Today's Goal

By the end of Day 1, you should be able to:

1. Define **Information Technology (IT)**.
2. Explain the difference between **IT and Information Systems (IS)**.
3. Identify the major components of an organization's IT environment.
4. Explain how **people, processes, technology, and data** work together.
5. Distinguish between **hardware, software, data, and networks**.
6. Explain why IT is important to organizations.
7. Describe the basic role of an IT department.

---

# 1. What Is Information Technology?

At its simplest:

> **Information Technology is the use of technology to create, store, process, transmit, protect, and manage information.**

IT includes much more than computers.

An organization's IT environment can include:

- Computers
- Servers
- Networks
- Cloud infrastructure
- Applications
- Databases
- Cybersecurity systems
- Mobile devices
- Data
- Software development
- IT support
- Identity and access management
- Artificial intelligence

Think of IT as an **ecosystem**, rather than a collection of individual technologies.

---

# 2. IT vs. Information Systems

These terms are related and sometimes used interchangeably, but there's a useful distinction.

## Information Technology

Focuses primarily on the **technology** used to handle information.

Examples:

- Servers
- Networks
- Databases
- Software
- Cloud platforms
- Security systems

## Information Systems

A broader concept that includes:

> **People + processes + data + technology**

An information system exists to accomplish some organizational purpose.

### Example

Imagine a hospital's patient scheduling system.

The **IT** includes:

- Application servers
- Database
- Network
- Application software
- Security controls

The **information system** includes those technologies **plus**:

- Scheduling employees
- Patients
- Doctors
- Scheduling procedures
- Business rules
- Patient data
- Policies

### Important distinction

**Technology is a component of an information system.**

---

# 3. The Four Major Components

A useful model for understanding information systems is:

## People

The humans involved.

Examples:

- Employees
- Customers
- IT administrators
- Developers
- Managers
- Analysts

---

## Processes

The activities and rules used to accomplish something.

Examples:

- How an employee requests access
- How a customer places an order
- How backups are performed
- How software gets deployed

---

## Technology

The tools that support the process.

Examples:

- Computers
- Applications
- Databases
- Networks
- Servers
- Cloud platforms

---

## Data

The information being collected, stored, processed, or transmitted.

Examples:

- Customer records
- Financial transactions
- Product information
- Employee records
- Healthcare information

---

### The key idea

These components work together.

For example:

**Customer**

↓

**Places order**

↓

**E-commerce application**

↓

**Database**

↓

**Payment system**

↓

**Order fulfillment**

The technology enables the process, but **people and business processes determine what the system actually needs to accomplish**.

---

# 4. Hardware

Hardware is the **physical equipment** used by an IT system.

Examples:

- Laptop
- Desktop
- Smartphone
- Server
- Hard drive
- SSD
- Router
- Network switch
- Monitor
- Printer

A simple way to remember it:

> **Hardware = something you can physically touch.**

---

# 5. Software

Software consists of the programs and instructions that tell hardware what to do.

Examples:

- Windows
- macOS
- Microsoft Excel
- Web browsers
- Database software
- Mobile applications
- Enterprise applications

A useful distinction:

## System Software

Helps operate the computer itself.

Example:

> Windows

## Application Software

Helps the user accomplish a specific task.

Examples:

> Excel  
> Salesforce  
> Chrome  
> A healthcare analytics application

---

# 6. Data

Data is one of the most important assets in modern organizations.

Consider a healthcare supply-chain company.

It might have data about:

- Customers
- Hospitals
- Products
- Vendors
- Purchases
- Prices
- Contracts
- Savings opportunities

Raw data can be processed to produce useful information.

### Example

Raw data:

> Product A — $10.00  
> Product A — $12.00  
> Product A — $9.00

Processed/analyzed information:

> "Hospital A is paying 20% more than the organization's benchmark price for Product A."

That's where IT starts creating **business value**.

---

# 7. Networks

A network allows computers and other devices to communicate.

Examples:

- Home Wi-Fi
- Corporate networks
- The Internet
- Cellular networks
- Cloud networks

A very simple model:

**Device A**

↓

**Network**

↓

**Device B**

The network doesn't necessarily store or process the information itself. Its primary job is to **allow communication between systems**.

We'll study networking much more deeply in Week 2.

---

# 8. Applications

An application is software designed to perform tasks for users or other systems.

Examples:

- Banking application
- Hospital scheduling application
- CRM
- Accounting system
- Analytics platform
- Email application

Applications often sit in the middle of the IT ecosystem.

For example:

**User**

↓

**Application**

↓

**API**

↓

**Database**

↓

**Infrastructure**

We'll eventually break down each of those components.

---

# 9. What Does an IT Department Do?

An IT organization can have many responsibilities.

## Infrastructure

Maintains:

- Servers
- Networks
- Cloud environments
- Storage

## Application Development

Builds and maintains software.

## Database/Data

Manages:

- Databases
- Data pipelines
- Data quality
- Analytics infrastructure

## Cybersecurity

Protects:

- Systems
- Networks
- Applications
- Data
- Users

## IT Operations

Keeps systems functioning.

## Help Desk / Support

Helps users solve technology problems.

## Architecture

Determines how technology systems should fit together.

---

# 10. IT as a Business Function

One of the most important ideas for this course:

> **IT exists to support organizational objectives.**

Technology isn't valuable simply because it's technologically impressive.

Consider two projects:

### Project A

Company spends $2 million building an advanced AI system that nobody uses.

### Project B

Company spends $100,000 automating a manual process that saves employees 20,000 hours per year.

Project B may produce substantially more business value.

This is why IT and business strategy are increasingly interconnected.

---

# 11. The IT Ecosystem

Here's the mental model I want you to start developing.

```text
                    BUSINESS
                       │
                       ▼
                    PEOPLE
                       │
                       ▼
                   PROCESSES
                       │
                       ▼
                 APPLICATIONS
                  /         \
                 /           \
                ▼             ▼
             DATA            APIs
                │             │
                └──────┬──────┘
                       ▼
                    NETWORK
                       │
                       ▼
              SERVERS / CLOUD
                       │
                       ▼
                  HARDWARE

          ┌─────────────────────┐
          │     SECURITY        │
          │ protects everything │
          └─────────────────────┘