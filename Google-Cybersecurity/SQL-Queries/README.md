# <p align="center">Apply filters to SQL queries</p>

## Project description

In this activity, we are going to create a portfolio in order to demonstrate my experience in using SQL during my Google Cybersecurity certificate.

The scenario:

You are a security professional at a large organization. Part of your job is to investigate security issues to help keep the system secure. You recently discovered some potential security issues that involve login attempts and employee machines.

Your task is to examine the organization’s data in their employees and log_in_attempts tables. You’ll need to use SQL filters to retrieve records from different datasets and investigate the potential security issues.

The table format for our sample database can be found here : [Table Format](./Table%20formats.pdf)

## Retrieve after hours failed login attempts

The Problem :

Having recently discovered a potential security incident that occurred after business hours. To investigate this, we need to query the log_in_attempts table and review after hours login activity. Use filters in SQL to create a query that identifies all failed login attempts that occurred after 18:00. (The time of the login attempt is found in the login_time column. The success column contains a value of 0 when a login attempt failed; you can use either a value of 0 or FALSE in your query to identify failed login attempts.)

Using the SQL query:

```bash
SELECT * FROM log_in_attempts WHERE login_time > '18:00:00' and success = 0;
```

![Image](./images/login_time18.png)

## Retrieve login attempts on specific dates

The Problem :

A suspicious event have been found, it occurred on 2022-05-09. To investigate this event, we will review all login attempts which occurred on this day and the day before. Use filters in SQL to create a query that identifies all login attempts that occurred on 2022-05-09 or 2022-05-08. (The date of the login attempt is found in the login_date column.)

Using the SQL query:

```bash
SELECT * FROM log_in_attempts WHERE login_date = '2022-05-09' or '2022-05-08';
```

![Image](./images/login_date05.png)

## Retrieve login attempts outside of Mexico

The Problem :

There’s been suspicious activity with login attempts, but the team has determined that this activity didn't originate in Mexico. Now, you need to investigate login attempts that occurred outside of Mexico. Use filters in SQL to create a query that identifies all login attempts that occurred outside of Mexico. (When referring to Mexico, the country column contains values of both MEX and MEXICO, and you need to use the LIKE keyword with % to make sure your query reflects this.)

Using the SQL query:

```bash
SELECT * FROM log_in_attempts WHERE NOT country LIKE 'MEX%';
```

![Image](./images/country_mexico.png)

## Retrieve employees in Marketing

The Problem :

Your team wants to perform security updates on specific employee machines in the Marketing department. You’re responsible for getting information on these employee machines and will need to query the employees table. Use filters in SQL to create a query that identifies all employees in the Marketing department for all offices in the East building.

(The department of the employee is found in the department column, which contains values that include Marketing. The office is found in the office column. Some examples of values in this column are East-170, East-320, and North-434. You’ll need to use the LIKE keyword with % to filter for the East building.)

Using the SQL query:

```bash
SELECT * FROM employees WHERE department = 'Marketing' AND office LIKE 'East%';
```

![Image](./images/employees_east.png)

## Retrieve employees in Finance or Sales

The Problem :

The team now needs to perform a different security update on machines for employees in the Sales and Finance departments. Use filters in SQL to create a query that identifies all employees in the Sales or Finance departments. (The department of the employee is found in the department column, which contains values that include Sales and Finance.)

Using the SQL query:

```bash
SELECT * FROM employees WHERE department = 'Sales' OR department = 'Finance';
```

![Image](./images/employees_sales_finance.png)

## Retrieve all employees not in IT

The Problem :

The team needs to make one more update to employee machines. The employees who are in the Information Technology department already had this update, but employees in all other departments need it. Use filters in SQL to create a query which identifies all employees not in the IT department. (The department of the employee is found in the department column, which contains values that include Information Technology.)

Using the SQL query:

```bash
SELECT * FROM employees WHERE NOT department = 'Information Technology';
```

![Image](./images/employees_information_technology.png)

## Summary

In this project, I applied SQL filtering techniques that I've learned during the 'Tools of the Trade: Linux and SQL' course in Google Cybersecurity to investigate potential security issues within an organization’s system. By querying the log_in_attempts and employees tables, I was able to identify suspicious activities such as failed logins after business hours, login attempts on specific dates, and access attempts originating outside of Mexico.

I also used SQL filters to retrieve employee data based on department and office location to support security updates on specific machines. This included identifying employees in Marketing, Finance, Sales, and those not part of the IT department.

To sum up everything, this activity demonstrates my ability to use SQL queries with conditions such as WHERE, AND, OR, NOT, and LIKE to analyze data, detect anomalies, and support cybersecurity operations.
