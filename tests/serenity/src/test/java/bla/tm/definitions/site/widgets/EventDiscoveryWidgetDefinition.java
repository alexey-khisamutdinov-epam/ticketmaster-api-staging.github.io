package bla.tm.definitions.site.widgets;

import bla.tm.definitions.site.WidgetValue;
import bla.tm.steps.products_and_docs.PD_Widget_EventDiscoverySteps;
import net.thucydides.core.annotations.Steps;
import org.jbehave.core.annotations.Given;
import org.jbehave.core.annotations.Then;
import org.jbehave.core.annotations.When;
import org.jbehave.core.model.ExamplesTable;

public class EventDiscoveryWidgetDefinition extends WidgetValue{
    @Steps
    PD_Widget_EventDiscoverySteps eventDiscoveryWidgetSteps;

    @Given("change all possible fields on the Event Discovery Widget page: $table")
    public void changeValuesOnMapPageWidget(ExamplesTable valuesTable) {
        getWidgetValues(valuesTable);
        eventDiscoveryWidgetSteps.changeValuesForAllFields(apiKey, keyWord, zipCode, city, attractionId, venueId, promoterId, source, countryCode, classificationName, eventCount);
    }

    @Given("store all fields values on the Event Discovery Widget page")
    public void storeAllFieldsValues() {
        eventDiscoveryWidgetSteps.storeValuesForAllFields();
    }

    //When
    @When("set Event Count $value on Event Discovery Widget page")
    public void setEventCountValue(String value) {
        eventDiscoveryWidgetSteps.setEventCountValue(value);
    }

    @When("search events by keyword $keyword on Event Discovery Widget page")
    public void searchEventsByKeyword(String keyword) {
        eventDiscoveryWidgetSteps.searchEventsByKeyword(keyword);
    }

    @When("set Radius $setValue on Event Discovery Widget page")
    public void setRadiusValue(String setValue) {
        eventDiscoveryWidgetSteps.setRadius(setValue);
    }

    @Given("change value of ZipCode $zipCode on Event Discovery Widget Page")
    @When("change value of ZipCode $zipCode on Event Discovery Widget Page")
    public void changeZipCode(String zipCode){
        eventDiscoveryWidgetSteps.setZipCodeValue(zipCode);
    }
    //Then
    @Then("the required fields are not empty and have default values on the Event Discovery Widget page")
    public void checkThatRequiredFieldsAreNotEmpty() {
        eventDiscoveryWidgetSteps.checkThatRequiredFieldsAreNotEmpty();
    }

    @Then("embedded html code contains stored values on the Event Discovery Widget page")
    public void checkThatEmbeddedHtmlCodeContainsStoredValues() {
        eventDiscoveryWidgetSteps.checkThatEmbeddedHtmlCodeContainsStoredValues();
    }

    @Then("found events contains $keyword on Event Discovery Widget page")
    public void checkThatFoundEventsContainsText(String keyword) {
        eventDiscoveryWidgetSteps.checkThatFoundEventsContainsText(keyword);
    }

    @Then("the number of events equals Event Count $value")
    public void checkThatNumberOfEventsEqualsValue(String value) {
        eventDiscoveryWidgetSteps.checkThatNumberOfEventsEqualsValue(value);
    }

    @Then("the number of events equals or less than Event Count $value")
    public void checkThatNumberOfEventsEqualsOrLessThanValue(String value) {
        eventDiscoveryWidgetSteps.checkThatNumberOfEventsEqualsOrLessThanValue(value);
    }

    @Then("Radius value is $actualValue on Event Discovery Widget page")
    public void checkThatRadiusValueIsInRange(String actualValue) {
        eventDiscoveryWidgetSteps.checkThatRadiusValueEqualsActualValue(actualValue);
    }

    @Then("all fields have been reseted to defaults on the Event Discovery Widget page")
    public void checkThatAllFieldsHaveBeenResetedToDefaults() {
        eventDiscoveryWidgetSteps.checkThatAllFieldsHaveBeenResetToDefaults();
    }

    @Then("the Country Field contains appropriate value $countryName on Event Discovery Widget Page")
    public void checkThatCountryFieldContainsValue(String countryName){
        eventDiscoveryWidgetSteps.fieldCountryContains(countryName);
    }
}
