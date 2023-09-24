# What is this?

This is a small clean architecture project divided into 3 packages, and this is just the first package of the three; this is the **domain layer**.

The exercise involves a simple To-Do list with a username and password. The names I use may sometimes seem to be inspired by Domain-Driven Design (DDD).

![Clean Architecture](./assets/clean_architecture.jpg)

## Thoughts

This package alone does not work since it is a collection of behaviors that the solution's entities have, along with the commands, or if you prefer to call them DTOs, that the future application should accept in order to work.

Although at this moment, I am thinking that these commands and their respective validations should be in the application layer because it is the application that should determine its own logic and not the domain. According to my readings, the domain should only concern itself with domain logic and nothing else, meaning logic in the entities, logic in the value objects, and nothing more.

## The Repository

I will try to follow the "[Conventional Commits](https://www.conventionalcommits.org/)" philosophy for commits and also apply the "[Release Flow](http://releaseflow.org/)".

## How to make it work?

I started working with NPM, but now I am working with PNPM for speed and storage space saving reasons. So, the steps would be as follows to try it out, as this package alone should not function.

NOTE: If you are not familiar with PNPM, I invite you to give it a try by clicking [here](https://pnpm.io/).

### Step 1: Clone the repository

```bash
git clone https://github.com/ProfeJulianLasso/todo-backend-domain.git
```

### Step 2: Install dependencies

```bash
pnpm install
```

### Optional Step: Run tests

```bash
pnpm test
```

Or, if you want to see the coverage, it would be as follows:

```bash
pnpm test:cov
```

### Step 3: Build the package

```bash
pnpm build
```

### Step 4: Create the symbolic link to include the package in the application layer

```bash
pnpm install -g
```

In my case, I only had to do the previous step once in the life of PNPM. Then, if we proceed to the next step, which is actually creating the symbolic link.

**NOTE**: To create the symbolic link, you must be in the root of the project.

```bash
pnpm link --global
```
