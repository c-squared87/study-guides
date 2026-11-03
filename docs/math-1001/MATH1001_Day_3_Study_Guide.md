# MATH1001 – Day 3 Study Guide
## Exponents, Radicals, and Order of Operations

**Day 3** · **45 minutes** · **Foundational algebra**

---

## 1. Learning objectives

By the end of today's lesson, you should be able to:

1. Identify the base and exponent in a power and evaluate powers.
2. Apply the product, quotient, and power-of-a-power rules for exponents.
3. Understand zero and negative exponents.
4. Evaluate powers involving negative numbers and distinguish between expressions such as \((-3)^2\) and \(-3^2\).
5. Recognize perfect squares and evaluate square roots.
6. Simplify basic radicals by factoring out perfect-square factors.
7. Apply the order of operations to evaluate expressions containing grouping symbols, exponents, multiplication, division, addition, and subtraction.

**Why we're studying this**

Exponents and radicals are part of the Real Numbers unit in Sophia's College Algebra course. They also appear throughout later topics, including polynomials, quadratic equations, and functions.

Your diagnostic showed that you could evaluate a few basic powers and a square root. Today we'll reinforce those skills and introduce the rules that let you simplify more complicated expressions efficiently.

## 2. Understanding exponents

An **exponent** tells you how many times to use a number as a factor. In the expression

\[
2^4
\]

- 2 is the **base**.
- 4 is the **exponent**.

This means multiply four factors of 2:

\[
2^4=2\times2\times2\times2=16
\]

An exponent does not mean multiply the base by the exponent. For example, \(2^4\) is 16, not 8.

### Worked example 1: Evaluating powers

Evaluate:

\[
3^3
\]

Step 1: The base is 3 and the exponent is 3.

Step 2: Write three factors of 3.

\[
3^3=3\times3\times3
\]

Step 3: Multiply.

\[
3\times3=9,\qquad 9\times3=27
\]

Final answer:

\[
\boxed{27}
\]

### Powers of negative numbers

Parentheses matter when the base is negative.

Compare these two expressions:

\[
(-3)^2=(-3)(-3)=9
\]

\[
-3^2=-(3\times3)=-9
\]

In the first expression, the negative number is inside parentheses, so the base is -3. In the second expression, the exponent applies to 3 first; the negative sign is outside the power.

### Worked example 2: Negative bases and parentheses

Evaluate:

\[
(-2)^3
\]

Step 1: The base is -2 because the negative sign is inside the parentheses.

Step 2: Write three factors.

\[
(-2)(-2)(-2)
\]

Step 3: Multiply. The first two negative factors produce a positive 4; multiplying by the third negative factor produces -8.

\[
\boxed{-8}
\]

A useful pattern is:

- A negative base raised to an **even** exponent gives a positive result.
- A negative base raised to an **odd** exponent gives a negative result.

This pattern assumes the entire negative number is the base, as in \((-2)^4\) or \((-2)^3\).

## 3. The basic rules of exponents

Exponent rules are shortcuts. They work when the bases and operations match the rule. Learn what each rule means rather than trying to memorize a collection of symbols without context.

### Rule 1: Multiplying powers with the same base

When multiplying powers with the same base, **add the exponents** and keep the base.

\[
a^m\times a^n=a^{m+n}
\]

For example:

\[
2^3\times2^2=2^{3+2}=2^5=32
\]

Why? The first power contains three factors of 2 and the second contains two more. Together there are five factors.

### Worked example 3: Product rule

Simplify:

\[
x^3\times x^4
\]

Step 1: The bases are both \(x\), so use the product rule.

Step 2: Add the exponents: \(3+4=7\).

\[
\boxed{x^7}
\]

### Rule 2: Dividing powers with the same base

When dividing powers with the same nonzero base, **subtract the exponents** and keep the base.

\[
\frac{a^m}{a^n}=a^{m-n},\qquad a\ne0
\]

For example:

\[
\frac{5^4}{5^2}=5^{4-2}=5^2=25
\]

The base must not be zero because division by zero is undefined.

### Worked example 4: Quotient rule

Simplify:

\[
\frac{y^7}{y^3}
\]

Step 1: The bases match, so subtract the exponents.

\[
y^{7-3}
\]

Step 2: Simplify.

\[
\boxed{y^4}\qquad (y\ne0)
\]

### Rule 3: Raising a power to another power

When a power is raised to another power, **multiply the exponents**.

\[
(a^m)^n=a^{mn}
\]

For example:

\[
(2^3)^2=2^{3\times2}=2^6=64
\]

### Worked example 5: Power-of-a-power rule

Simplify:

\[
(x^2)^4
\]

Step 1: Multiply the exponents: \(2\times4=8\).

\[
\boxed{x^8}
\]

### Rule 4: Raising a product to a power

An exponent outside parentheses applies to every factor inside the parentheses.

\[
(ab)^n=a^n b^n
\]

For example:

\[
(2x)^3=2^3x^3=8x^3
\]

### Worked example 6: Power of a product

Simplify:

\[
(3y)^2
\]

Step 1: Square both factors.

\[
3^2\times y^2
\]

Step 2: Evaluate the numerical power.

\[
\boxed{9y^2}
\]

### Rule 5: Zero exponent

Any nonzero base raised to the zero power equals 1.

\[
a^0=1,\qquad a\ne0
\]

Examples:

\[
7^0=1\qquad x^0=1\ (x\ne0)
\]

The expression \(0^0\) is not covered by this rule and is treated as undefined in this context.

### Rule 6: Negative exponents

A negative exponent means take the reciprocal of the positive power. It does **not** mean the result is automatically negative.

\[
a^{-n}=\frac{1}{a^n},\qquad a\ne0
\]

For example:

\[
2^{-3}=\frac{1}{2^3}=\frac{1}{8}
\]

### Worked example 7: Negative exponent

Rewrite with a positive exponent:

\[
x^{-4}
\]

A negative exponent indicates that the power belongs in the denominator:

\[
\boxed{\frac{1}{x^4}}\qquad (x\ne0)
\]

### Exponent rules at a glance

| Situation | Rule | Example |
|---|---|---|
| Multiply same base | Add exponents | \(x^2x^3=x^5\) |
| Divide same nonzero base | Subtract exponents | \(x^6/x^2=x^4\) |
| Power raised to a power | Multiply exponents | \((x^2)^3=x^6\) |
| Product raised to a power | Apply power to each factor | \((2x)^2=4x^2\) |
| Nonzero base to zero power | Result is 1 | \(9^0=1\) |
| Negative exponent | Take the reciprocal | \(3^{-2}=1/9\) |

**Important:** These rules do not mean you can add exponents whenever you see them. The operation and the bases determine which rule applies.

## 4. Understanding radicals and square roots

A **radical** is an expression that uses a root symbol. The most familiar radical is the square root symbol:

\[
\sqrt{25}
\]

The square root asks: What nonnegative number multiplied by itself equals 25?

\[
5\times5=25
\]

Therefore:

\[
\sqrt{25}=5
\]

The symbol \(\sqrt{\ }\) represents the **principal square root**, which is the nonnegative root. Although both 5 and -5 square to 25, \(\sqrt{25}\) means 5. By contrast, the equation \(x^2=25\) has two solutions: \(x=5\) and \(x=-5\).

### Perfect squares

A **perfect square** is the result of an integer multiplied by itself.

| Number | Square | Perfect square? |
|---:|---:|---|
| 1 | \(1^2=1\) | Yes |
| 2 | \(2^2=4\) | Yes |
| 3 | \(3^2=9\) | Yes |
| 4 | \(4^2=16\) | Yes |
| 5 | \(5^2=25\) | Yes |
| 6 | \(6^2=36\) | Yes |
| 7 | \(7^2=49\) | Yes |
| 8 | \(8^2=64\) | Yes |
| 9 | \(9^2=81\) | Yes |
| 10 | \(10^2=100\) | Yes |
| 11 | \(11^2=121\) | Yes |
| 12 | \(12^2=144\) | Yes |

Knowing common perfect squares makes simplifying radicals much easier.

### Worked example 8: Evaluating a square root

Evaluate:

\[
\sqrt{144}
\]

Ask what positive number multiplied by itself equals 144.

\[
12\times12=144
\]

Therefore:

\[
\boxed{12}
\]

### Simplifying square roots

Not every square root is a whole number. Sometimes you can simplify it by identifying a perfect-square factor.

For example, 72 is not a perfect square, but it can be written as \(36\times2\). Since the square root of 36 is 6, we can simplify the radical.

### Worked example 9: Simplifying a radical

Simplify:

\[
\sqrt{72}
\]

Step 1: Find a perfect-square factor of 72. One is 36.

\[
\sqrt{72}=\sqrt{36\times2}
\]

Step 2: Separate the square root of the product.

\[
\sqrt{36}\times\sqrt{2}
\]

Step 3: Evaluate the perfect square.

\[
\boxed{6\sqrt{2}}
\]

The remaining \(\sqrt{2}\) cannot be simplified further using whole-number factors.

### Worked example 10: Simplifying another radical

Simplify:

\[
\sqrt{50}
\]

Step 1: Identify a perfect-square factor: \(50=25\times2\).

Step 2: Separate the factors under the radical.

\[
\sqrt{50}=\sqrt{25}\sqrt{2}
\]

Step 3: Evaluate the perfect square.

\[
\boxed{5\sqrt{2}}
\]

### Square roots of fractions

When the numerator and denominator are nonnegative, you can take their square roots separately, provided the denominator is not zero.

\[
\sqrt{\frac{a}{b}}=\frac{\sqrt a}{\sqrt b}
\]

For example:

\[
\sqrt{\frac{16}{25}}=\frac{\sqrt{16}}{\sqrt{25}}=\frac{4}{5}
\]

### A note about negative numbers and square roots

In the real-number system, the square root of a negative number is not defined. For example, there is no real number that can be multiplied by itself to produce -9. You will encounter a broader number system called the complex numbers later in the course; for now, remember that square roots of negative numbers are not real numbers.

## 5. Order of operations

The **order of operations** tells you which operation to perform first when an expression contains multiple operations.

A common memory aid is PEMDAS:

| Letter | Operation |
|---|---|
| P | Parentheses and other grouping symbols |
| E | Exponents and roots |
| MD | Multiplication and division, from left to right |
| AS | Addition and subtraction, from left to right |

Two details are especially important:

- Multiplication and division have equal priority. Work from left to right.
- Addition and subtraction have equal priority. Work from left to right.

PEMDAS does **not** mean multiplication must always happen before division, or addition must always happen before subtraction.

### Worked example 11: Exponents, multiplication, and addition

Evaluate:

\[
3+2^3\times2
\]

Step 1: Evaluate the exponent.

\[
3+8\times2
\]

Step 2: Multiply.

\[
3+16
\]

Step 3: Add.

\[
\boxed{19}
\]

### Worked example 12: Grouping symbols and exponents

Evaluate:

\[
\frac{(10-4)^2}{3}
\]

Step 1: Evaluate the parentheses.

\[
\frac{6^2}{3}
\]

Step 2: Evaluate the exponent.

\[
\frac{36}{3}
\]

Step 3: Divide.

\[
\boxed{12}
\]

### Worked example 13: Negative signs and exponents

Evaluate:

\[
-3^2+4^2
\]

Step 1: Evaluate the powers. The exponent applies to 3 and 4; the negative sign in the first term is outside the power.

\[
-(9)+16
\]

Step 2: Add the signed numbers.

\[
-9+16=\boxed{7}
\]

Compare this with \((-3)^2\), which equals positive 9. Parentheses determine whether the negative sign is part of the base.

## 6. Common mistakes to avoid

| Common mistake | Correct approach |
|---|---|
| \(2^4=2\times4=8\) | \(2^4=2\times2\times2\times2=16\). |
| \(x^2\times x^3=x^6\) | Add exponents: \(x^{2+3}=x^5\). |
| \((x^2)^3=x^5\) | Multiply exponents: \(x^{2\times3}=x^6\). |
| \(5^0=0\) | Any nonzero base to the zero power is 1. |
| \(2^{-3}=-8\) | A negative exponent means reciprocal: \(2^{-3}=1/8\). |
| \((-3)^2=-9\) | The negative is part of the base, so the result is positive 9. |
| \(\sqrt{25}=\pm5\) | The principal square root is 5. The equation \(x^2=25\) has solutions \(\pm5\). |
| \(\sqrt{72}=\sqrt{36}\times2=12\) | \(\sqrt{72}=\sqrt{36}\sqrt2=6\sqrt2\). |
| In PEMDAS, always multiply before dividing. | Multiplication and division are equal priority; proceed left to right. |

Keep these reminders in your notes:

1. An exponent tells you how many times to use the base as a factor.
2. Multiplying powers with the same base means adding exponents; dividing means subtracting exponents.
3. A negative exponent means reciprocal, not a negative answer.
4. Parentheses determine whether a negative sign is part of the base.
5. A square root symbol means the nonnegative (principal) square root.
6. In the order of operations, multiplication/division and addition/subtraction are each handled from left to right.

## 7. Independent practice

Try these exercises without looking back at the worked examples. Show your work, especially for expressions with negative signs and multiple operations.

### Exercise A: Evaluating powers

**1.** Evaluate:

\[
4^3
\]

**2.** Evaluate:

\[
(-5)^2
\]

**3.** Evaluate:

\[
-5^2
\]

### Exercise B: Exponent rules

Simplify. Assume any variable used as a denominator is nonzero.

**4.**

\[
x^3\times x^4
\]

**5.**

\[
\frac{a^8}{a^3}
\]

**6.**

\[
(m^2)^3
\]

**7.**

\[
7^0
\]

**8.** Rewrite using a positive exponent:

\[
2^{-3}
\]

### Exercise C: Radicals

Simplify or evaluate.

**9.**

\[
\sqrt{144}
\]

**10.**

\[
\sqrt{75}
\]

### Exercise D: Order of operations

Evaluate each expression. Show the order in which you perform the operations.

**11.**

\[
6+2^3\times3
\]

**12.**

\[
\frac{18-6}{2^2}+5
\]

---

## 8. Knowledge check

Choose one answer for each question. Try to complete the quiz without using your notes. The answer key and explanations follow the questions.

**1. What is the value of \(3^3\)?**

A. 9  
B. 18  
C. 27  
D. 81

**2. What is the value of \((-4)^2\)?**

A. -16  
B. 16  
C. -8  
D. 8

**3. Simplify \(x^2\times x^5\).**

A. \(x^{10}\)  
B. \(x^7\)  
C. \(x^3\)  
D. \(2x^7\)

**4. What is the value of \(5^0\)?**

A. 0  
B. 5  
C. 1  
D. 10

**5. Rewrite \(3^{-2}\) using a positive exponent.**

A. -9  
B. \(\frac{1}{9}\)  
C. 9  
D. \(-\frac{1}{9}\)

**6. Simplify \(\sqrt{48}\).**

A. \(4\sqrt{3}\)  
B. \(8\sqrt{3}\)  
C. \(4\sqrt{12}\)  
D. 24

**7. Evaluate \(2+3^2\times2\).**

A. 100  
B. 20  
C. 22  
D. 14

### Knowledge check answer key

1. **C — 27.** \(3^3=3\times3\times3=27\).
2. **B — 16.** The negative is part of the base. A negative times a negative is positive: \((-4)(-4)=16\).
3. **B — \(x^7\).** The bases match and are being multiplied, so add the exponents: \(2+5=7\).
4. **C — 1.** Any nonzero base raised to the zero power equals 1.
5. **B — \(\frac{1}{9}\).** A negative exponent means take the reciprocal: \(3^{-2}=1/3^2=1/9\).
6. **A — \(4\sqrt{3}\).** Since \(48=16\times3\), \(\sqrt{48}=\sqrt{16}\sqrt3=4\sqrt3\).
7. **B — 20.** Evaluate the exponent first: \(2+9\times2=2+18=20\).

## 9. Answer key – Independent practice

Try all 12 exercises before reading the solutions. Use the steps to check your reasoning, not just the final answer.

### Exercise A: Evaluating powers

**1.**

\[
4^3=4\times4\times4=\boxed{64}
\]

**2.**

\[
(-5)^2=(-5)(-5)=\boxed{25}
\]

The negative number is the base because it is inside the parentheses. An even power of a negative base is positive.

**3.**

\[
-5^2=-(5\times5)=\boxed{-25}
\]

The exponent applies to 5 first. The negative sign is outside the power.

### Exercise B: Exponent rules

**4.**

\[
x^3\times x^4=x^{3+4}=\boxed{x^7}
\]

Multiply powers with the same base by adding their exponents.

**5.**

\[
\frac{a^8}{a^3}=a^{8-3}=\boxed{a^5}\qquad (a\ne0)
\]

Divide powers with the same nonzero base by subtracting their exponents.

**6.**

\[
(m^2)^3=m^{2\times3}=\boxed{m^6}
\]

When a power is raised to another power, multiply the exponents.

**7.**

\[
7^0=\boxed{1}
\]

Any nonzero base to the zero power equals 1.

**8.**

\[
2^{-3}=\frac{1}{2^3}=\boxed{\frac{1}{8}}
\]

A negative exponent means reciprocal.

### Exercise C: Radicals

**9.**

\[
\sqrt{144}=\boxed{12}
\]

Since \(12\times12=144\), the principal square root is 12.

**10.**

\[
\sqrt{75}=\sqrt{25\times3}=\sqrt{25}\sqrt3=\boxed{5\sqrt3}
\]

Factor out the perfect square 25, then simplify its square root.

### Exercise D: Order of operations

**11.**

\[
6+2^3\times3
\]

Evaluate the exponent first:

\[
6+8\times3
\]

Multiply:

\[
6+24=\boxed{30}
\]

**12.**

\[
\frac{18-6}{2^2}+5
\]

Evaluate the parentheses:

\[
\frac{12}{2^2}+5
\]

Evaluate the exponent:

\[
\frac{12}{4}+5
\]

Divide, then add:

\[
3+5=\boxed{8}
\]

## 10. End-of-day review

Before finishing, try answering these questions without looking at your notes:

1. What does an exponent tell you to do?
2. When multiplying powers with the same base, what happens to the exponents?
3. What does a negative exponent mean?
4. Why are \((-3)^2\) and \(-3^2\) different?
5. What is the difference between the expression \(\sqrt{25}\) and the equation \(x^2=25\)?
6. What are the steps for simplifying a radical such as \(\sqrt{72}\)?
7. What does it mean to work left to right when applying the order of operations?

These questions test whether you understand why the rules work, not just whether you can repeat them.

## 11. Day 3 completion checklist

Mark each item when you have completed it.

- [ ] I can identify the base and exponent and evaluate basic powers.
- [ ] I understand the product, quotient, and power-of-a-power rules.
- [ ] I understand zero and negative exponents.
- [ ] I can distinguish between a negative number raised to a power and a negative sign outside a power.
- [ ] I can identify perfect squares and evaluate square roots.
- [ ] I can simplify basic radicals by factoring out perfect squares.
- [ ] I can apply the order of operations to multistep expressions.
- [ ] I completed all 12 independent practice problems.
- [ ] I completed the knowledge check and reviewed the explanations.
- [ ] I wrote down anything I need to revisit.

## Looking ahead: Day 4

The next lesson will move from number properties into **Linear Equations and Inequalities**. We'll review what it means to solve for a variable, practice keeping equations balanced, and introduce inequalities and their number-line representations.

We'll build on the equation-solving skills you demonstrated in the diagnostic while adding more deliberate practice with negative numbers, fractions, and algebraic operations.
