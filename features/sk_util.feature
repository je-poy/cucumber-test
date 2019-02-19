Feature: SKMTI Suitescript Utilities

  Rule: Object related

    Background:
      Given you provide a JSON Object

    Scenario: Remove properties with empty values
      Given you have a JSON object
      When the object has properties with empty value
      Then properties should be removed

    Scenario: Add query params using JSON Object into URL string
      Given your URL is 'www.cucumbersample.com'
      When parameter is provided
      Then the params should be appended on the URL
