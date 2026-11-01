# WGU Introduction to IT — Day 4 Study Guide

## Data, Databases, SQL & APIs

### Topic

**How IT Systems Store, Organize, Retrieve, and Exchange Data**

---

# Day 5 Goals

By the end of this study session, you should be able to:

1. Explain the difference between data and information.
2. Explain why organizations treat data as an important asset.
3. Explain what a database is.
4. Explain what a relational database is.
5. Identify tables, rows, columns, and fields.
6. Explain primary keys.
7. Explain foreign keys at a basic level.
8. Explain relationships between database tables.
9. Explain what SQL is.
10. Recognize basic SQL operations such as `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
11. Explain what a database query does.
12. Explain what an API is.
13. Explain how APIs allow applications to communicate.
14. Trace data from a user interface through an application and database.
15. Connect today's concepts to the networking and infrastructure concepts from Days 1–4.

---

# 1. The Big Picture

We've now built quite a bit of our IT mental model.

### Day 1

We looked at IT as an organizational ecosystem:

**People + Processes + Applications + Data + Technology**

### Day 2

We looked inside an individual computer:

**Application → OS → CPU/RAM/Storage**

### Day 3

We looked at larger systems:

**Client → Network → Application Server → Database Server → Storage**

### Day 4

We looked at how those systems communicate:

**Client → Network → Router → Internet → Server**

Today we're going to focus on one of the most important things moving through those systems:

**Data**

A simplified enterprise application might look like:

**User → Application → API → Database → Data**

Understanding this flow is a major foundation for IT.

---

# 2. What Is Data?

**Data** is information represented in a form that can be stored, processed, or communicated.

Examples include:

- Customer names
- Product IDs
- Prices
- Dates
- Addresses
- Transaction amounts
- Inventory quantities
- User IDs
- Company IDs
- Account numbers
- Sensor readings

A single piece of data might not tell us much.

For example:

**$14.99**

By itself, that doesn't tell us much.

But if we know:

**Product:** Widget A  
**Price:** $14.99  
**Date:** October 31  
**Customer:** Company 123

the data becomes much more meaningful.

---

# 3. Data vs. Information

A useful distinction is:

**Data = individual facts or values**

**Information = data organized or interpreted so that it becomes useful**

For example:

### Data

- 100
- 120
- 95
- 150

These are just numbers.

### Information

> Monthly purchases increased by 50% between January and April.

The information was derived from the underlying data.

This distinction isn't always absolute, but it's a useful conceptual model.

---

# 4. Why Is Data Important to Organizations?

Modern organizations depend heavily on data.

A company might use data to:

- Make decisions
- Track customers
- Manage inventory
- Analyze financial performance
- Forecast demand
- Monitor operations
- Identify trends
- Measure performance
- Detect fraud
- Improve products
- Personalize experiences

Consider a healthcare supply-chain organization.

It might use data about:

- Products purchased
- Purchase quantities
- Prices
- Suppliers
- Facilities
- Contracts
- Customers
- Savings opportunities

The organization can then analyze that data to make decisions.

This is why data is often treated as an **organizational asset**.

---

# 5. Where Does Data Live?

Data can be stored in many places.

Examples include:

- Files
- Spreadsheets
- Databases
- Data warehouses
- Data lakes
- Cloud storage
- Application storage

Today we're primarily interested in **databases**.

A database provides a structured way to store and retrieve information.

---

# 6. What Is a Database?

A **database** is an organized collection of data designed to allow information to be stored, managed, and retrieved.

Imagine a company storing customer information.

Without a database, information might be scattered across:

- Excel files
- CSV files
- Individual documents
- Emails
- Local computers

That can become difficult to manage.

A database provides a structured system for organizing that information.

For example:

**Customer Database**

| CustomerID | CustomerName | State |
|---|---|---|
| 101 | Company A | TN |
| 102 | Company B | GA |
| 103 | Company C | TX |

Now the application can retrieve information consistently.

---

# 7. What Is a Relational Database?

A **relational database** stores data in structured tables and allows relationships between those tables.

This is one of the most common database models you'll encounter in business IT.

Think of it as a collection of related spreadsheets, but with much stronger rules and capabilities.

For example, an organization might have:

**Customers**

| CustomerID | Name |
|---|---|
| 101 | Company A |
| 102 | Company B |

And:

**Orders**

| OrderID | CustomerID | Amount |
|---|---|---:|
| 5001 | 101 | $500 |
| 5002 | 101 | $750 |
| 5003 | 102 | $250 |

The `CustomerID` connects the two tables.

This is the **relational** part of a relational database.

---

# 8. Tables

A relational database organizes data into **tables**.

A table represents a particular type of thing or entity.

Examples:

- Customers
- Employees
- Products
- Orders
- Invoices
- Suppliers
- Facilities
- Savings Opportunities

For example:

### Products

| ProductID | ProductName | Category | Price |
|---|---|---|---:|
| 1001 | Product A | Surgical | $25.00 |
| 1002 | Product B | Medical | $40.00 |
| 1003 | Product C | Surgical | $15.00 |

The table represents **products**.

---

# 9. Rows

A **row** represents one individual record in a table.

For example:

| ProductID | ProductName | Category | Price |
|---|---|---|---:|
| 1001 | Product A | Surgical | $25.00 |

That row represents one product.

Another row represents another product.

So:

**Table = collection of records**

**Row = one record**

---

# 10. Columns

A **column** represents a particular attribute or type of data.

In this table:

| ProductID | ProductName | Category | Price |
|---|---|---|---:|
| 1001 | Product A | Surgical | $25.00 |

The columns are:

- ProductID
- ProductName
- Category
- Price

Each column describes something about the product.

So:

**Column = attribute/data field**

---

# 11. Rows vs. Columns

This distinction is worth memorizing.

| Concept | Meaning |
|---|---|
| **Table** | Collection of related records |
| **Row** | One record |
| **Column** | One attribute/field |
| **Cell** | One individual value |

For example:

| CustomerID | Name | State |
|---|---|---|
| 101 | Company A | TN |
| 102 | Company B | GA |

The value:

**Company A**

is one **cell**.

The entire record:

**101 | Company A | TN**

is one **row**.

The `Name` field is a **column**.

---

# 12. Primary Keys

A **primary key** is a column, or combination of columns, that uniquely identifies each row in a table.

For example:

### Customers

| CustomerID | Name |
|---|---|
| 101 | Company A |
| 102 | Company B |
| 103 | Company C |

`CustomerID` can be the primary key.

Why?

Because each customer has a unique ID.

This allows the database to distinguish:

**Customer 101**

from

**Customer 102**

even if two customers happen to have similar names.

---

# 13. Why Not Use Names as Primary Keys?

Imagine two companies named:

**General Hospital**

A name isn't necessarily unique.

An ID is much safer:

**CustomerID 1001**

**CustomerID 1002**

This is one reason databases commonly use identifiers.

A primary key should generally provide a reliable way to uniquely identify a record.

---

# 14. Foreign Keys

A **foreign key** is a field that references a primary key in another table.

For example:

### Customers

| CustomerID | Name |
|---|---|
| 101 | Company A |
| 102 | Company B |

### Orders

| OrderID | CustomerID | Amount |
|---|---:|---:|
| 5001 | 101 | $500 |
| 5002 | 101 | $750 |
| 5003 | 102 | $250 |

In the `Orders` table:

**CustomerID**

is a foreign key referencing:

**Customers.CustomerID**

This creates a relationship between the tables.

---

# 15. Relationships Between Tables

Relational databases are powerful because tables can be connected.

For example:

**Customer**

↓

**Orders**

One customer may have many orders.

This is a **one-to-many relationship**.

Another example:

**Department**

↓

**Employees**

One department may have many employees.

Another:

**Customer**

↓

**Account**

A customer might have one or multiple accounts depending on the system's design.

You don't need to memorize every possible relationship type yet.

The important concept is:

> **Relational databases allow related information to be stored in separate tables and connected through keys.**

---

# 16. Why Separate Data Into Tables?

You might wonder:

> Why not put everything into one giant table?

Suppose we created:

| CustomerName | CustomerState | OrderID | OrderAmount | ProductName | ProductPrice |
|---|---|---|---:|---|---:|

This could quickly become enormous.

The same customer information might be repeated hundreds or thousands of times.

Instead, we can separate the data:

**Customers**

↓

**Orders**

↓

**Products**

and connect them using IDs.

This reduces unnecessary duplication and makes the data easier to manage.

This concept is related to **database normalization**, which you'll encounter later.

For now, understand the general idea:

> **Separate related concepts into appropriate tables and connect them with keys.**

---

# 17. What Is SQL?

**SQL** stands for:

**Structured Query Language**

SQL is a language used to work with relational databases.

SQL allows you to:

- Retrieve data
- Insert data
- Update data
- Delete data
- Create tables
- Modify database structures
- Filter results
- Sort results
- Combine data from multiple tables

You don't need to become a SQL programmer for this course.

However, understanding what SQL does is important.

---

# 18. What Is a Query?

A **query** is a request for information from a database.

Imagine you have a database containing 10 million transactions.

You don't want to manually inspect all 10 million records.

Instead, you can ask the database:

> "Show me all transactions for Customer 101."

SQL allows you to express that request.

For example:

```sql
SELECT *
FROM Orders
WHERE CustomerID = 101;
```

This query asks the database to return orders where the `CustomerID` is `101`.

---

# 19. SELECT

The SQL command **SELECT** is used to retrieve data.

For example:

```sql
SELECT *
FROM Customers;
```

This means:

> Retrieve the records from the Customers table.

You can also select specific columns:

```sql
SELECT CustomerID, Name
FROM Customers;
```

This asks for only:

- CustomerID
- Name

---

# 20. WHERE

The **WHERE** clause filters results.

For example:

```sql
SELECT *
FROM Customers
WHERE State = 'TN';
```

This means:

> Give me customers whose state is Tennessee.

Another example:

```sql
SELECT *
FROM Orders
WHERE Amount > 500;
```

This means:

> Give me orders greater than $500.

The basic pattern is:

**SELECT → FROM → WHERE**

This is one of the most useful SQL patterns to recognize.

---

# 21. INSERT

**INSERT** adds a new record.

For example:

```sql
INSERT INTO Customers
(CustomerID, Name, State)
VALUES
(104, 'Company D', 'TX');
```

This adds a new customer.

Think:

**INSERT = add data**

---

# 22. UPDATE

**UPDATE** changes existing data.

For example:

```sql
UPDATE Customers
SET State = 'GA'
WHERE CustomerID = 104;
```

This changes the state associated with Customer 104.

Think:

**UPDATE = change existing data**

---

# 23. DELETE

**DELETE** removes data.

For example:

```sql
DELETE FROM Customers
WHERE CustomerID = 104;
```

This removes the customer record.

Think:

**DELETE = remove data**

Be careful with `DELETE`.

A poorly written `DELETE` statement can potentially remove many records.

For example:

```sql
DELETE FROM Customers;
```

Without a filter, this could remove all records from the table.

This is one reason database access should be carefully controlled.

---

# 24. The Four Basic SQL Operations

A useful beginner mental model is:

| SQL Command | Purpose |
|---|---|
| **SELECT** | Retrieve data |
| **INSERT** | Add data |
| **UPDATE** | Change data |
| **DELETE** | Remove data |

You may see these collectively referred to as **CRUD** operations:

**Create → Read → Update → Delete**

The mapping is:

- Create → INSERT
- Read → SELECT
- Update → UPDATE
- Delete → DELETE

CRUD is an extremely common software-development concept.

---

# 25. What Happens When an Application Uses a Database?

Suppose you are using an analytics application.

You click:

**"Show me savings opportunities."**

The process might look like:

**User**

↓

**Browser**

↓

**Application**

↓

**SQL Query**

↓

**Database**

↓

**Results**

↓

**Application**

↓

**Browser**

↓

**User**

The user doesn't normally write the SQL themselves.

The application generates the appropriate request.

---

# 26. Where Does the API Fit?

Now we can introduce another important concept:

**API**

API stands for:

**Application Programming Interface**

An API provides a defined way for software systems to communicate with one another.

Think of an API as a **contract or interface between software systems**.

For example:

**Frontend Application → API → Backend Application → Database**

The frontend doesn't necessarily communicate directly with the database.

Instead, it communicates with the backend through an API.

---

# 27. Why Use an API?

APIs provide a controlled way for applications to communicate.

Suppose you have:

**Web Application**

and

**Backend System**

The web application might ask:

> "Give me the savings opportunities for Company 123."

The API defines how that request should be made.

The backend processes the request and returns a response.

This provides a separation between:

**What the client wants**

and

**How the backend accomplishes it**

---

# 28. API Example

Imagine an API endpoint:

**GET /customers/123**

The client might be asking:

> "Give me information about customer 123."

The server might respond with structured data such as:

```json
{
  "customerId": 123,
  "name": "Company A",
  "state": "TN"
}
```

You don't need to learn JSON deeply today.

The important concept is:

> **APIs allow software systems to exchange structured requests and responses.**

---

# 29. APIs vs. Databases

These concepts are related but different.

A **database** stores data.

An **API** provides a way for software systems to communicate.

For example:

**Application → API → Database**

The API doesn't replace the database.

The API provides an interface through which the application can request or manipulate data.

Think of:

**Database = storage**

**API = communication interface**

---

# 30. A Real-World Enterprise Example

Let's put everything together using a financial analytics application.

Imagine an analyst clicks:

**"Show Savings Opportunities."**

The architecture might be:

**User**

↓

**Browser**

↓

**Frontend Application**

↓

**API**

↓

**Backend Application**

↓

**Database**

↓

**Data**

The process might work like this:

### Step 1

The user clicks a button.

### Step 2

The frontend application sends an API request.

### Step 3

The backend receives the request.

### Step 4

The backend determines what data is needed.

### Step 5

The backend sends a SQL query to the database.

### Step 6

The database retrieves the appropriate records.

### Step 7

The database returns the results.

### Step 8

The backend processes the results.

### Step 9

The backend sends an API response.

### Step 10

The frontend displays the results.

The user sees:

**Savings Opportunities**

But behind that screen could be a surprisingly complex system.

---

# 31. Connecting Days 1–5

We can now build a much more complete mental model.

### Day 1 — IT Ecosystem

**People + Processes + Applications + Data + Technology**

### Day 2 — Computer

**Application → OS → CPU/RAM/Storage**

### Day 3 — Infrastructure

**Client → Network → Application Server → Database Server → Storage**

### Day 4 — Networking

**Client → Switch/Router → Network → Server**

### Day 5 — Data

**User → Application → API → Database → Data**

Combine all of these:

**User**

↓

**Client Device**

↓

**Network**

↓

**Application**

↓

**API**

↓

**Backend**

↓

**Database**

↓

**Storage**

This is becoming the core architecture model for the course.

---

# 32. Data in an Organizational Context

Let's step back from the technical details.

Imagine a healthcare organization has millions of purchasing records.

The organization might store:

- Company
- Facility
- Product
- Supplier
- Quantity
- Purchase price
- Date
- Contract
- Category

The database stores those facts.

The application retrieves them.

The API allows systems to communicate.

The network carries the requests and responses.

The infrastructure provides the computing resources.

The user ultimately sees information that helps them make decisions.

This illustrates something important:

> **IT components don't exist independently. They work together to create business value.**

---

# 33. Data Flow Mental Model

When working with an application, ask:

### Where does the data come from?

Maybe:

**Database**

### How does the application get it?

Maybe:

**API**

### Where is the data processed?

Maybe:

**Application Server**

### How does the request get there?

**Network**

### Where does the application run?

**Server / VM / Cloud Infrastructure**

### Who uses the result?

**User**

This type of questioning is extremely useful for understanding IT systems.

---

# 34. Day 5 Vocabulary

| Term | Meaning |
|---|---|
| **Data** | Facts or values that can be stored, processed, or communicated |
| **Information** | Data organized or interpreted to provide meaning |
| **Database** | Organized collection of data |
| **Relational Database** | Database that stores data in related tables |
| **Table** | Collection of related records |
| **Row** | One record in a table |
| **Column** | Attribute or field in a table |
| **Cell** | Individual value in a table |
| **Primary Key** | Unique identifier for a record |
| **Foreign Key** | Field referencing a key in another table |
| **Relationship** | Connection between related database records |
| **SQL** | Structured Query Language |
| **Query** | Request for information or an operation on data |
| **SELECT** | Retrieves data |
| **INSERT** | Adds data |
| **UPDATE** | Changes existing data |
| **DELETE** | Removes data |
| **CRUD** | Create, Read, Update, Delete |
| **API** | Defined interface allowing software systems to communicate |
| **Endpoint** | Specific location/interface through which an API provides a function or resource |
| **JSON** | Common structured format for exchanging data |

---

# 35. Exercise — Understand a Database

Imagine this table:

### Products

| ProductID | ProductName | Category | Price |
|---:|---|---|---:|
| 1001 | Product A | Surgical | $25 |
| 1002 | Product B | Medical | $40 |
| 1003 | Product C | Surgical | $15 |
| 1004 | Product D | Pharmaceutical | $75 |

Answer the following:

### Question 1

How many rows are in the table?

### Question 2

How many columns are in the table?

### Question 3

What could be the primary key?

### Question 4

What is the value of `ProductName` for ProductID 1003?

### Question 5

Which products belong to the Surgical category?

### Question 6

Write a SQL query that would retrieve all Surgical products.

### Challenge

Write a query that would retrieve products costing more than $20.

---

# 36. Exercise — Think Like an Application

Imagine you're building a savings initiative application.

The application needs to store:

- Savings Initiative ID
- Company ID
- Initiative Name
- Owner
- Status
- Estimated Savings
- Actual Savings
- Start Date
- Completion Date

Ask yourself:

### Question 1

What might the table be called?

### Question 2

What could be the primary key?

### Question 3

Which field might identify the company?

### Question 4

Which fields would likely be numbers?

### Question 5

Which fields would likely be dates?

### Question 6

What might another table contain?

For example, perhaps:

**Companies**

and

**Savings Initiatives**

The two tables could be connected using:

**CompanyID**

This is the beginning of database design thinking.

---

# 37. Day 5 Quiz

## Questions

### 1. What is data?

A. Only numbers  
B. Facts or values that can be stored, processed, or communicated  
C. A type of network  
D. A programming language  

---

### 2. What is a database?

A. A network device  
B. An organized collection of data  
C. An operating system  
D. A web browser  

---

### 3. What is a relational database?

A. A database that only stores numbers  
B. A database that stores related data in structured tables  
C. A database that cannot use SQL  
D. A database stored exclusively in the cloud  

---

### 4. In a relational database, what does a row represent?

A. A database server  
B. One record  
C. One database  
D. One table  

---

### 5. What does a column represent?

A. A collection of tables  
B. A particular attribute or field  
C. A database server  
D. A network connection  

---

### 6. What is a primary key?

A. A password used to access a database  
B. A unique identifier for a record  
C. A network address  
D. An API endpoint  

---

### 7. What is a foreign key?

A. A field that references a key in another table  
B. A password for a database  
C. A type of IP address  
D. A cloud service  

---

### 8. What does SQL stand for?

A. System Query Logic  
B. Structured Query Language  
C. Software Question Language  
D. Server Query Layer  

---

### 9. What does SELECT do?

A. Deletes data  
B. Retrieves data  
C. Encrypts data  
D. Creates a network  

---

### 10. What does UPDATE do?

A. Changes existing data  
B. Creates a new server  
C. Retrieves data  
D. Deletes a table  

---

### 11. What does CRUD stand for?

A. Create, Read, Update, Delete  
B. Connect, Retrieve, Update, Deploy  
C. Create, Route, Update, Download  
D. Compute, Read, Upload, Delete  

---

### 12. What is an API?

A. A database  
B. A defined interface that allows software systems to communicate  
C. A type of network cable  
D. A physical server  

---

### 13. Which component primarily stores data?

A. API  
B. Database  
C. Router  
D. Browser  

---

### 14. Which component provides an interface for software systems to communicate?

A. Database  
B. API  
C. RAM  
D. Switch  

---

### 15. Which sequence best represents a simplified application data flow?

A. Database → User → API → Network  
B. User → Application → API → Backend → Database  
C. User → Database → CPU → Router  
D. API → User → Storage → Application  

---

# 38. Answer Key

### 1. B — Facts or values that can be stored, processed, or communicated

Data can include numbers, text, dates, identifiers, measurements, and many other types of values.

### 2. B — An organized collection of data

A database provides a structured system for storing and managing information.

### 3. B — A database that stores related data in structured tables

Relational databases organize information into tables and establish relationships between them.

### 4. B — One record

Each row represents an individual record.

### 5. B — A particular attribute or field

Columns describe specific attributes of the records.

### 6. B — A unique identifier for a record

A primary key allows the database to uniquely identify a particular row.

### 7. A — A field that references a key in another table

Foreign keys allow tables to establish relationships.

### 8. B — Structured Query Language

SQL is commonly used to work with relational databases.

### 9. B — Retrieves data

`SELECT` is used to retrieve records and fields.

### 10. A — Changes existing data

`UPDATE` modifies existing records.

### 11. A — Create, Read, Update, Delete

CRUD represents the four fundamental types of data operations.

### 12. B — A defined interface that allows software systems to communicate

APIs provide a structured way for software systems to exchange requests and responses.

### 13. B — Database

The database stores the application's data.

### 14. B — API

An API provides a defined interface for software systems to communicate.

### 15. B — User → Application → API → Backend → Database

This is a simplified representation of how an application might retrieve data.

---

# 39. Mastery Check

Before moving to Day 6, make sure you can explain these concepts without looking at your notes.

## Data

- What is data?
- What is information?
- Why is data valuable to organizations?
- Where can organizations store data?

## Databases

- What is a database?
- What is a relational database?
- What is a table?
- What is a row?
- What is a column?
- What is a cell?

## Keys and Relationships

- What is a primary key?
- Why should records have unique identifiers?
- What is a foreign key?
- Why would an organization use multiple related tables?

## SQL

- What does SQL stand for?
- What does `SELECT` do?
- What does `INSERT` do?
- What does `UPDATE` do?
- What does `DELETE` do?
- What does CRUD mean?

## APIs

- What is an API?
- Why do applications use APIs?
- How is an API different from a database?
- What is an API endpoint?

## Architecture

Can you explain this flow?

**User → Application → API → Backend → Database → Data**

And then explain how it connects to what you learned on Days 3 and 4:

**User → Client → Network → Application Server → API → Database Server → Storage**

---

# Mastery Score

**16–20 confident answers:** You're ready for Day 6.

**12–15:** Review relational databases, primary/foreign keys, and APIs.

**Below 12:** Revisit Sections 2–30 before continuing.

---

# 40. Key Takeaway

The biggest idea from Day 5 is:

> **Data is one of the central resources that IT systems exist to manage and use.**

A modern business application may involve:

**User**

↓

**Client**

↓

**Network**

↓

**Application**

↓

**API**

↓

**Backend**

↓

**Database**

↓

**Storage**

The database stores the data.

SQL allows applications and people to work with relational data.

APIs provide structured interfaces between software systems.

The network connects those systems.

Infrastructure provides the computing resources.

And the application turns all of those technical capabilities into something useful for the organization.

### Your progression so far

**Day 1 — What is IT?**

People + Processes + Technology + Data

**Day 2 — What's inside a computer?**

Application + OS + CPU + RAM + Storage

**Day 3 — How do organizations build larger systems?**

Clients + Servers + Infrastructure + Virtualization + Cloud

**Day 4 — How do those systems communicate?**

Networks + IP Addresses + DNS + Protocols + Routers + Switches

**Day 5 — How do those systems store and exchange data?**

Databases + Tables + Keys + SQL + APIs

You now have the foundation for understanding one of the most important patterns in modern IT:

**User → Application → API → Database → Data**

The next major area is **software development**: how applications are designed, built, tested, deployed, and maintained.