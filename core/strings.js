/* eslint-disable import/no-anonymous-default-export */
export default {
    contact:{
        name:"نام",
        phone:"موبایل",
        message:"متن",
        email:"ایمیل"
    },
    validation: {
        required: "این فیلد اجباری است",
        mustBeNumber: "این فیلد باید عددی باشد",
        invalidMobileNumber: "شماره موبایل ورودی صحیح نیست",
        invalidDate: "تاریخ ورودی صحیح نیست",
        invalidEmail: "ایمیل اشتباه است",
        invalidNationalCode: "شناسه ملی وارد شده صحیح نیست",
        passwordInvalidLength: "گذروازه باید حداقل 5 کاراکتر داشته باشد",
        incorrectRepeatPassword: "تکرار گذروازه اشتباه است",
        invalidGuid: "شناسه مربوطه صحیح نمی باشد",
        invalidUrl: "آدرس اینترنتی صحیح نمی باشد",
        invalidValue: "ورودی با الگو مطابقت ندارد",
        minCharLength: (length) => `حداقل تعداد حروف ${length} می باشد`,
        maxCharLength: (length) => `حداکثر تعداد حروف ${length} می باشد`,
        fixCharLength: (length) => `مقدار باید شامل ${length} حرف باشد`,
        minNumberLength: (length) => `حداقل ${length} رقم لازم است`,
        maxNumberLength: (length) => `حداکثر ${length} رقم لازم است`,
        fixNumberLength: (length) => `مقدار باید شامل ${length} رقم باشد`,
        maxCharLength: (length) => `حداکثر تعداد حروف ${length} می باشد`,
        minValue: (val) => `حداقل مقدار ممکن  ${val} می باشد`,
        maxValue: (val) => `حداکثر مقدار ممکن  ${val} می باشد`,
        maxFileSizeExceeded: (size) => `حداکثر حجم فایل ${size} مگابایت می باشد`,
        maxFileCountExceeded: (count) => `حداکثر تعداد فایل ها ${count} می باشد`,
        atleastOneFileRequired: "حداقل یک فایل مورد نیاز است",
        fileFormatNotAccepted: (formates) =>
        `فرمت فایل می بایست یکی از این موارد باشد (${formates})`,
    }
}