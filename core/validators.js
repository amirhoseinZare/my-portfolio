import i18n from "./config/i18n/index"
import strings from "./strings";

const validatorType = {
  require: "require",
  minCharLength: "minCharLength",
  maxCharLength: "maxCharLength",
  fixCharLength: "fixCharLength",
  isNumber: "isNumber",
  minNumberLength: "minNumberLength",
  maxNumberLength: "maxNumberLength",
  fixNumberLength: "fixNumberLength",
  min: "min",
  max: "max",
  email: "email",
  mobile: "mobile",
  url: "url",
  regex: "regex",
  custom: "custom",
  guid: "guid",
};
const validators = {
  require: (message) => ({ type: validatorType.require, message }),
  minCharLength: (minLength, message) => ({
    type: validatorType.minCharLength,
    message,
    minLength,
  }),
  maxCharLength: (maxLength, message) => ({
    type: validatorType.maxCharLength,
    message,
    maxLength,
  }),
  fixCharLength: (length, message) => ({
    type: validatorType.fixCharLength,
    message,
    length,
  }),
  isNumber: (message) => ({ type: validatorType.isNumber, message }),
  minNumberLength: (minLength, message) => ({
    type: validatorType.minNumberLength,
    message,
    minLength,
  }),
  maxNumberLength: (maxLength, message) => ({
    type: validatorType.maxNumberLength,
    message,
    maxLength,
  }),
  fixNumberLength: (length, message) => ({
    type: validatorType.fixNumberLength,
    message,
    length,
  }),
  min: (minValue, message) => ({ type: validatorType.min, message, minValue }),
  max: (maxValue, message) => ({ type: validatorType.max, message, maxValue }),
  email: (message) => ({ type: validatorType.email, message }),

  mobile: (message) => ({ type: validatorType.mobile, message }),
  url: (message) => ({ type: validatorType.url, message }),
  guid: (message) => ({ type: validatorType.guid, message }),
  regex: (regex, message) => ({ type: validatorType.regex, message, regex }),
  custom: (func) => ({ type: validatorType.custom, func }),
};
export default validators;
export const validate = (val, validators, val2) => {
  let isValid = true;
  if (validators)
    for (const validator of validators) {
      switch (validator.type) {
        case validatorType.require:
          if (
            val === undefined ||
            val === null ||
            val.toString().trim().length === 0
          )
            return {
              isValid: false,
              message: i18n.t("validation.required"),
            };
          break;
        case validatorType.minCharLength:
          if (val && val.length < validator.minLength)
            return {
              isValid: false,
              message:i18n.t("validation.minCharLength" , validator.minLength ),
            };
          break;
        case validatorType.maxCharLength:
          if (val && val.length > validator.maxLength)
            return {
              isValid: false,
              message: i18n.t("validation.maxCharLength", validator.maxLength),
            };
          break;
        case validatorType.fixCharLength:
          if (val && val.length !== validator.length)
            return {
              isValid: false,
              message: i18n.t("validation.fixCharLength", validator.maxLength),
            };
          break;
        case validatorType.isNumber:
          if (val && isNaN(val))
            return {
              isValid: false,
              message: i18n.t("validation.mustBeNumber"),
            };
          break;
        case validatorType.fixNumberLength:
          if (val && val.length !== validator.length)
            return {
              isValid: false,
              message: i18n.t("validation.fixNumberLength", validator.length)
            };
          break;
        case validatorType.minNumberLength:
          if (val && val.length < validator.minLength)
            return {
              isValid: false,
              message: i18n.t("validation.minNumberLength", validator.minLength)
            };
          break;
        case validatorType.maxNumberLength:
          if (val && val.length > validator.maxLength)
            return {
              isValid: false,
              message: i18n.t("validation.maxNumberLength", validator.maxLength)
            };
          break;
        case validatorType.min:
          if (val && !isNaN(val) && parseFloat(val) < validator.minValue)
            return {
              isValid: false,
              message: i18n.t("validation.minValue", validator.minValue)
            };
          break;
        case validatorType.max:
          if (val && !isNaN(val) && parseFloat(val) > validator.maxValue)
            return {
              isValid: false,
              message: i18n.t("validation.maxValue", validator.maxValue),
            };
          break;
        case validatorType.email:
          if (val && !/^\S+@\S+\.\S+$/.test(val))
            return {
              isValid: false,
              message: i18n.t("validation.invalidEmail"),
            };
          break;
        case validatorType.mobile:
          if (val && !/^0?9\d{9}$/.test(val))
            return {
              isValid: false,
              message: i18n.t("validation.invalidMobileNumber"),
            };
          break;
        case validatorType.url:
          if (
            val &&
            !/^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
              val
            )
          )
            return {
              isValid: false,
              message: i18n.t("validation.invalidUrl"),
            };
          break;
          case validatorType.guid:
            if (
              val &&
              !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
                val
              )
            )
              return {
                isValid: false,
                message: i18n.t("validation.invalidGuid"),
              };
            break;
        case validatorType.regex:
          if (val && !new RegExp(validator.regex).test(val))
            return {
              isValid: false,
              message: i18n.t("validation.invalidValue"),
            };
          break;
        case validatorType.custom:
          return validator.func(val);
        default:
          return { isValid: true, message: "" };
      }
    }
  return { isValid, message: "" };
};
