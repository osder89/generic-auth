import {DatePipe} from "@angular/common";

const buildFullDateMomentFormat = (separator: string = '/') => `DD${separator}MM${separator}YYYY HH:mm:ss`;
const buildDateMomentFormat = (separator: string = '/') => `DD${separator}MM${separator}YYYY`;

const buildFullDatePipeFormat = (separator: string = '/') => `dd${separator}MM${separator}yyyy HH:mm:ss`;
const buildDatePipeFormat = (separator: string = '/') => `dd${separator}MM${separator}yyyy`;

const getTimeAgo = (createdDate: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - new Date(createdDate).getTime();

  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) {
    return 'Justo Ahora';
  } else if (diffMinutes < 60) {
    return `Hace ${diffMinutes} minutos`;
  } else if (diffHours < 24) {
    return `Hace ${diffHours} horas`;
  } else {
    return `Hace ${diffDays} días`;
  }
};

export const DateUtil = {
  buildFullDateMomentFormat,
  buildDateMomentFormat,
  buildFullDatePipeFormat,
  buildDatePipeFormat,
  getTimeAgo
};
