# sdet_refresh

[![](https://img.shields.io/badge/appium-black.svg)](http://appium.io)
[![](https://img.shields.io/badge/webdriver-green.svg)](https://www.selenium.dev/documentation/en/webdriver/) 
[![](https://img.shields.io/badge/cucumber-lightgreen.svg)](https://cucumber.io/docs/) 
[![](https://img.shields.io/badge/LICENSE-MIT-red.svg)](./LICENSE)

Cucumber, WebDriver, and Appium refresh.

## Webdriver

Simple site testing examples.

Verify that you're using a valid version of Node (requires async support):

```Bash
$ nvm use 13.8.0
```

## CucumberJS

Cucumber sets the paradigm for *Behavior Driven Development (Testing)*.

Cucumber testing involves three parts:

1. Test cases
1. Step definitions
1. Hooks

[Gherkin](https://cucumber.io/docs/gherkin/reference/) is the primary language used to configure tests cases (steps).

```gherkin
Feature: Multiple site support
  Only blog owners can post to a blog, except administrators,
  who can post to all blogs.

  Background:
    Given a global administrator named "Greg"
    And a blog named "Greg's anti-tax rants"
    And a customer named "Dr. Bill"
    And a blog named "Expensive Therapy" owned by "Dr. Bill"

  Scenario: Dr. Bill posts to his own blog
    Given I am logged in as Dr. Bill
    When I try to post to "Expensive Therapy"
    Then I should see "Your article was published."

  Scenario: Dr. Bill tries to post to somebody else's blog, and fails
    Given I am logged in as Dr. Bill
    When I try to post to "Greg's anti-tax rants"
    Then I should see "Hey! That's not your blog!"

  Scenario: Greg posts to a client's blog
    Given I am logged in as Greg
    When I try to post to "Expensive Therapy"
    Then I should see "Your article was published."
```

> Each step starts with `Given`, `When`, `Then`, `And`, or `But`.

Hooks are associated with each scenario and each step.

## Resources

* https://github.com/magaum/cucumber-js-example