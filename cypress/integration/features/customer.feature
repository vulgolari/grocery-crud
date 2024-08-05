Feature: Customer Management

  Scenario: Add Customer and verify success message
    Given the user opens the application
    And the user selects "Bootstrap V4 Theme" from the version dropdown
    When the user clicks on "Add Customer"
    And the user fills the customer form
    And the user clicks on "Save"
    Then the user should see the success message for add operation "Your data has been successfully stored into the database. Edit Customer or Go back to list"

  Scenario: Delete Customer and verify deletion message
    Given the user opens the application
    And the user selects "Bootstrap V4 Theme" from the version dropdown
    And the user searches for the customer by name
    When the user selects the customer and clicks "Delete"
    And the user confirms the deletion
    Then the user should see the success message for delete operation "Your data has been successfully deleted from the database."

  Scenario: Edit Customer and verify success message
    Given the user opens the application
    And the user selects "Bootstrap V4 Theme" from the version dropdown
    And the user searches for the customer by name
    When the user selects the customer and clicks "Edit"
    And the user updates the customer information
    And the user clicks on "Update Changes"
    Then the user should see the success message for edit operation "Your data has been successfully updated. Go back to list"

  # Scenario: Validate error message for missing required fields
  #   Given the user opens the application
  #   And the user selects "Bootstrap V4 Theme" from the version dropdown
  #   When the user clicks on "Add Customer"
  #   And the user leaves required fields empty
  #   And the user clicks on "Save"
  #   Then the user should see the error message "This field is required" for all required fields

  # Scenario: Add Customer with optional fields and verify success
  #   Given the user opens the application
  #   And the user selects "Bootstrap V4 Theme" from the version dropdown
  #   When the user clicks on "Add Customer"
  #   And the user fills the customer form with optional fields
  #   And the user clicks on "Save"
  #   Then the user should see the success message for add operation "Your data has been successfully stored into the database. Edit Customer or Go back to list"

  Scenario: Cancel customer deletion
    Given the user opens the application
    And the user selects "Bootstrap V4 Theme" from the version dropdown
    And the user searches for the customer by name
    When the user selects the customer and clicks "Delete"
    And the user cancels the deletion
    Then the user should see that the customer is still present in the list
