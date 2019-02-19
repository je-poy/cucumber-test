Feature: SKMTI Suitescript Utilities

  Rule: Object related

    Background:
      Given you provide a JSON Object

    Scenario: Remove properties with empty values
      Given you have a JSON object
      When the object has properties with empty value
      Then properties should be removed
