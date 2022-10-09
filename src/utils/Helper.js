import moment, { max } from "moment";
import 'moment-timezone';

export const convertPaginationFromApi = (data) => {
  let returnData = {};
  for (const key in data) {
    returnData[key.toLowerCase()] = data[key];
  }
  return returnData;
};

export const convertArrayDataFromApi = (datas, settings, additional = {}) => {
  let datasReturn = [];
  datas.forEach((elem) => {
    datasReturn.push(convertDataFromApi(elem, settings, additional));
  });
  return datasReturn;
};

export const convertDataFromApi = (data, settings, additional = {}) => {
  //{Name: "test"}
  //settings[Name] = name
  let dataReturn = {};
  for (const key in settings) {
    if (key == "Status") dataReturn[settings[key]] = STATUS[data[key]];
    else if (key == "CreatedAt")
      dataReturn[settings[key]] = moment(data[key])
        .utc()
        .format("DD/MM/YYYY HH:mm:ss");
    else if (key == "role_id") dataReturn[settings[key]] = ROLES[data[key]];
    else dataReturn[settings[key]] = data[key];
  }
  if (Object.keys(additional).length > 0) {
    dataReturn = { ...dataReturn, ...additional };
  }
  return dataReturn;
};

export const getListObjectFromListId = (arrayObject=[], arrayId=[], key="id") =>{
  let listObject = [];
  arrayObject.map((obj) => {
    if (arrayId.includes(obj[key])) {
      listObject.push(obj);
    }
  });
  return listObject;
}

export const convertApiDateToWebDate = (theDate="") => {
  console.log(theDate)
  if(theDate != "" && theDate != null)
    return moment(theDate).tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss")
  return ""
}

export const convertToWebDate = (theDate="") => {
  let jsDate = new Date()
  if(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(theDate)){
    jsDate = new Date(theDate)
  }
  return moment(jsDate).tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss")
}


export const convertToApiDate = (theDate) => {
  let jsDate = new Date(theDate)

  return moment(jsDate).tz("Asia/Jakarta").toISOString()
}

export const convertMoneyNominalFormat = (value) => {
  return (value + "").replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export const getBase64Image = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

export const validatePicture = (e, ratio, maxSize) => {
  return new Promise(function(resolve) {
    const reader = new FileReader();
    const picFile = e.target.files[0];
    reader.readAsDataURL(picFile);
    reader.onload = (e) => {
      const image = new Image();
      const theImage = e.target.result;
      image.src = e.target.result;
      image.onload = (e) => {
        let validationResponse = {
          theImage: null,
          isOk: false
        }
        const height = e.target.height;
        const width = e.target.width;

        var ratioSisi = ratio.split(":");
        var resultDevideRatio =
          parseFloat(ratioSisi[0]) / parseFloat(ratioSisi[1]);
        if (width / height != resultDevideRatio) {
          validationResponse.message = "Maaf ratio gambar yang dipilih tidak " + ratio;
          resolve(validationResponse);
        }
        if (picFile.size > maxSize) {
          const maxSizeToMb = (maxSize / 1048576).toFixed(2);
          validationResponse.message = "Maaf ukuran maksimal " + maxSizeToMb + " mb"
          resolve(validationResponse);
        }
        validationResponse = {
            message: "Berhasil memilih gambar",
            theImage: theImage,
            isOk: true
          }
          resolve(validationResponse);
      };
    };
  });
};

export const getArrayOfObjectField = (objArray = [], column="id") => {
  let result = objArray.map(a => a[column]);
  return result
}

export const STATUS = ["Baru", "Diterima", "Dipublikasikan", "Ditolak"];
export const ROLES = ["Public","Administrator", "User"];
