Feature: Translate Something
Scenario: Translate something
  Given The Translate is open
  When I enter and
  Then I select English as first
  Then I select German as second
  Then I see und as translated
