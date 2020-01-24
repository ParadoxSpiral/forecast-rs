use super::{ForecastRequestBuilder, ForecastRequest, TimeMachineRequestBuilder,
            TimeMachineRequest, ExcludeBlock, Units, Lang, ExtendBy, FORECAST_URL, EXCLUDE,
            EXTEND, LANG, UNITS};

use serde::{Serialize, Deserialize};

use reqwest::Url;

use std::vec::Vec;

// constants

const LAT: f64 = 6.66;
const LONG: f64 = 66.6;
const TIME: u64 = 666;

static API_KEY: &'static str = "some_api_key";

// tests for request models and their builders

#[test]
fn test_forecast_request_builder_defaults() {
    let request = ForecastRequestBuilder::new(API_KEY, LAT, LONG).build();

    let expected_url = Url::parse(&format!(
        "{base}/{key}/{lat:.16},{long:.16}?",
        base = FORECAST_URL,
        key = API_KEY,
        lat = LAT,
        long = LONG
    )).unwrap();

    let expected = ForecastRequest::new(
        API_KEY,
        LAT,
        LONG,
        expected_url,
        Vec::new(),
        None,
        None,
        None
    );

    assert_eq!(expected.api_key, request.api_key);
    assert_eq!(expected.latitude, request.latitude);
    assert_eq!(expected.longitude, request.longitude);
    assert_eq!(expected.exclude, request.exclude);
    assert_eq!(expected.extend, request.extend);
    assert_eq!(expected.lang, request.lang);
    assert_eq!(expected.units, request.units);
    assert_eq!(expected.url, request.url);

    assert_eq!(expected, request);
}

#[test]
fn test_forecast_request_builder_simple() {
    let mut blocks = vec![ExcludeBlock::Daily, ExcludeBlock::Alerts];

    let request = ForecastRequestBuilder::new(API_KEY, LAT, LONG)
        .exclude_block(ExcludeBlock::Hourly)
        .exclude_blocks(&mut blocks)
        .extend(ExtendBy::Hourly)
        .lang(Lang::Arabic)
        .units(Units::Imperial)
        .build();

    let expected_url = {
        let mut url = Url::parse(&format!(
            "{base}/{key}/{lat:.16},{long:.16}",
            base = FORECAST_URL,
            key = API_KEY,
            lat = LAT,
            long = LONG
        )).unwrap();

        url.query_pairs_mut()
            .append_pair(EXCLUDE, "hourly,daily,alerts")
            .append_pair(EXTEND, "hourly")
            .append_pair(LANG, "ar")
            .append_pair(UNITS, "us");

        url
    };

    let expected = ForecastRequest::new(
        API_KEY,
        LAT,
        LONG,
        expected_url,
        vec![
            ExcludeBlock::Hourly,
            ExcludeBlock::Daily,
            ExcludeBlock::Alerts
        ],
        Some(ExtendBy::Hourly),
        Some(Lang::Arabic),
        Some(Units::Imperial)
    );

    assert_eq!(expected, request);
}

#[test]
fn test_forecast_request_builder_complex() {
    let mut builder = ForecastRequestBuilder::new(API_KEY, LAT, LONG);
    let mut blocks = vec![ExcludeBlock::Daily, ExcludeBlock::Alerts];

    builder = builder.exclude_block(ExcludeBlock::Hourly);
    builder = builder.exclude_blocks(&mut blocks);
    builder = builder.extend(ExtendBy::Hourly);
    builder = builder.lang(Lang::Arabic);
    builder = builder.units(Units::Imperial);

    let expected_url = {
        let mut url = Url::parse(&format!(
            "{base}/{key}/{lat:.16},{long:.16}",
            base = FORECAST_URL,
            key = API_KEY,
            lat = LAT,
            long = LONG
        )).unwrap();

        url.query_pairs_mut()
            .append_pair(EXCLUDE, "hourly,daily,alerts")
            .append_pair(EXTEND, "hourly")
            .append_pair(LANG, "ar")
            .append_pair(UNITS, "us");

        url
    };

    let expected = ForecastRequest::new(
        API_KEY,
        LAT,
        LONG,
        expected_url,
        vec![
            ExcludeBlock::Hourly,
            ExcludeBlock::Daily,
            ExcludeBlock::Alerts
        ],
        Some(ExtendBy::Hourly),
        Some(Lang::Arabic),
        Some(Units::Imperial)
    );

    assert_eq!(expected, builder.build());
}

#[test]
fn test_time_machine_request_builder_defaults() {
    let request = TimeMachineRequestBuilder::new(
        API_KEY, LAT, LONG, TIME
    ).build();

    let expected_url = Url::parse(&format!(
        "{base}/{key}/{lat:.16},{long:.16},{time}?",
        base = FORECAST_URL,
        key = API_KEY,
        lat = LAT,
        long = LONG,
        time = TIME
    )).unwrap();

    let expected = TimeMachineRequest::new(
        API_KEY,
        LAT,
        LONG,
        TIME,
        expected_url,
        Vec::new(),
        None,
        None
    );

    assert_eq!(expected.api_key, request.api_key);
    assert_eq!(expected.latitude, request.latitude);
    assert_eq!(expected.longitude, request.longitude);
    assert_eq!(expected.time, request.time);
    assert_eq!(expected.exclude, request.exclude);
    assert_eq!(expected.lang, request.lang);
    assert_eq!(expected.units, request.units);
    assert_eq!(expected.url, request.url);

    assert_eq!(expected, request);
}

#[test]
fn test_time_machine_request_builder_simple() {
    let mut blocks = vec![ExcludeBlock::Daily, ExcludeBlock::Alerts];

    let request = TimeMachineRequestBuilder::new(API_KEY, LAT, LONG, TIME)
        .exclude_block(ExcludeBlock::Hourly)
        .exclude_blocks(&mut blocks)
        .lang(Lang::Arabic)
        .units(Units::Imperial)
        .build();

    let expected_url = {
        let mut url = Url::parse(&format!(
            "{base}/{key}/{lat:.16},{long:.16},{time}",
            base = FORECAST_URL,
            key = API_KEY,
            lat = LAT,
            long = LONG,
            time = TIME
        )).unwrap();

        url.query_pairs_mut()
            .append_pair(EXCLUDE, "hourly,daily,alerts")
            .append_pair(LANG, "ar")
            .append_pair(UNITS, "us");

        url
    };

    let expected = TimeMachineRequest::new(
        API_KEY,
        LAT,
        LONG,
        TIME,
        expected_url,
        vec![
            ExcludeBlock::Hourly,
            ExcludeBlock::Daily,
            ExcludeBlock::Alerts
        ],
        Some(Lang::Arabic),
        Some(Units::Imperial)
    );

    assert_eq!(expected, request);
}

#[test]
fn test_time_machine_request_builder_complex() {
    let mut builder = TimeMachineRequestBuilder::new(API_KEY, LAT, LONG, TIME);
    let mut blocks = vec![ExcludeBlock::Daily, ExcludeBlock::Alerts];

    builder = builder.exclude_block(ExcludeBlock::Hourly);
    builder = builder.exclude_blocks(&mut blocks);
    builder = builder.lang(Lang::Arabic);
    builder = builder.units(Units::Imperial);

    let expected_url = {
        let mut url = Url::parse(&format!(
            "{base}/{key}/{lat:.16},{long:.16},{time}",
            base = FORECAST_URL,
            key = API_KEY,
            lat = LAT,
            long = LONG,
            time = TIME
        )).unwrap();

        url.query_pairs_mut()
            .append_pair(EXCLUDE, "hourly,daily,alerts")
            .append_pair(LANG, "ar")
            .append_pair(UNITS, "us");

        url
    };

    let expected = TimeMachineRequest::new(
        API_KEY,
        LAT,
        LONG,
        TIME,
        expected_url,
        vec![
            ExcludeBlock::Hourly,
            ExcludeBlock::Daily,
            ExcludeBlock::Alerts
        ],
        Some(Lang::Arabic),
        Some(Units::Imperial)
    );

    assert_eq!(expected, builder.build());
}

// Test that we can deserialize and serialize both variants "nb" and "no"
#[test]
fn test_norwegian_lang_serde() {

    #[derive(Serialize, Deserialize, PartialEq, Debug)]
    struct TestStruct {
        no: Lang,
        nb: Lang,
        en: Lang
    }

    let test_json = "{\"nb\":\"nb\",\"no\":\"no\",\"en\":\"en\"}";

    let test_struct: TestStruct = serde_json::from_str(test_json).unwrap();

    assert_eq!(test_struct.nb, Lang::NorwegianBokmal);
    assert_eq!(test_struct.no, Lang::NorwegianBokmal);
    assert_eq!(test_struct.en, Lang::English);

    let test_struct_serialized = serde_json::to_string(&test_struct).unwrap();

    let test_struct_deserialized: TestStruct = serde_json::from_str(
        test_struct_serialized.as_str()
    ).unwrap();

    assert_eq!(test_struct_deserialized.nb, Lang::NorwegianBokmal);
    assert_eq!(test_struct_deserialized.no, Lang::NorwegianBokmal);
    assert_eq!(test_struct_deserialized.en, Lang::English);
}
