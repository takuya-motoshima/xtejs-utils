export default class {
    /**
     * It takes a string of tokens and replaces them with their corresponding values.
     *
     * @example
     * import { DateUtils } from 'xtejs-utils';
     *
     * // Get the current date and time in any format
     * DateUtils.format();// 2020-03-20T12:17:34+09:00
     * DateUtils.format('dddd, MMMM Do YYYY, h:mm:ss a');// Friday, March 20th 2020, 12:17:34 pm
     * DateUtils.format('ddd, hA');// Fri, 12PM
     *
     * // Get any date and time in any format
     * DateUtils.format('2020-01-01');// 2020-01-01T00:00:00+09:00
     * DateUtils.format('2020-01-01', 'dddd, MMMM Do YYYY, h:mm:ss a');// Wednesday, January 1st 2020, 12:00:00 am
     * DateUtils.format('2020-01-01', 'ddd, hA');// Wed, 12AM
     *
     * @param  {string[]} ...args
     * @return {string}
     */
    static format(...args: string[]): string;
    /**
     * Get a 24 hour array
     *
     * @example
     * import { DateUtils } from 'xtejs-utils';
     *
     * // Get time from 00:00
     * DateUtils.timesOneDay();// ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00"]
     *
     * // Get the time from 09:00
     * DateUtils.timesOneDay(9);// ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00"]
     *
     * // Get the time from 00:00 in any format
     * DateUtils.timesOneDay('LT');// ["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"]
     *
     * // Get the time from 09:00 in any format
     * DateUtils.timesOneDay(9, 'LT');// ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM"]
     *
     * @param  {string[]} ...args
     * @return {string[]}
     */
    static timesOneDay(...args: string[]): string[];
    /**
     * Get the day of the month
     *
     * @example
     * import { DateUtils } from 'xtejs-utils';
     *
     * // Get the day of the current month in any format
     * DateUtils.daysInMonth();// ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
     *
     * // Get the day of the month in any format
     * DateUtils.daysInMonth('MMM D');// [["Mar 1","Mar 2","Mar 3","Mar 4","Mar 5","Mar 6","Mar 7","Mar 8","Mar 9","Mar 10","Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31"]
     *
     * // Get day of any month
     * DateUtils.daysInMonth('2020-01');// ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
     *
     * // Get day of any month in any format
     * DateUtils.daysInMonth('2020-01', 'MMM D');["Jan 1","Jan 2","Jan 3","Jan 4","Jan 5","Jan 6","Jan 7","Jan 8","Jan 9","Jan 10","Jan 11","Jan 12","Jan 13","Jan 14","Jan 15","Jan 16","Jan 17","Jan 18","Jan 19","Jan 20","Jan 21","Jan 22","Jan 23","Jan 24","Jan 25","Jan 26","Jan 27","Jan 28","Jan 29","Jan 30","Jan 31"]
     *
     * @param  {string[]} ...args
     * @return {string[]}
     */
    static daysInMonth(...args: string[]): string[];
    /**
     * Get an array of dates and times at any interval from a range
     *
     * @example
     * import { DateUtils } from 'xtejs-utils';
     *
     * // Get date every 7 years from 2020 to 2030
     * DateUtils.range(7, 'years', '2020', '2030', 'Y');// ["2020","2027"]
     *
     * // Get date every 7 months from January 2020 to January 2030
     * DateUtils.range(7, 'months', '2020/1', '2030/1', 'M/Y');// ["1/2020","8/2020","3/2021","10/2021","5/2022","12/2022","7/2023","2/2024","9/2024","4/2025","11/2025","6/2026","1/2027","8/2027","3/2028","10/2028","5/2029","12/2029"]
     *
     * // Get date every 1 week from March 1 to March 31
     * DateUtils.range(1, 'weeks', '3/1', '3/31', 'ddd, M/D');// ["Thu, 3/1","Thu, 3/8","Thu, 3/15","Thu, 3/22","Thu, 3/29"]
     *
     * // Get date every 7 days from March 1 to March 31
     * DateUtils.range(7, 'days', '3/1', '3/31', 'M/D');// ["3/1","3/8","3/15","3/22","3/29"]
     *
     * // Get time every 7 hours from 0:00, March 1 to 0:00, March 2
     * DateUtils.range(7, 'hours', '3/1, 0:00', '3/2, 0:00', 'H:mm');// ["0:00","7:00","14:00","21:00"]
     *
     * // Get time every 30 minutes from 9:00 to 12:00
     * DateUtils.range(30, 'minutes', '3/1, 9:00', '3/1, 12:00', 'H:mm');// ["9:00","9:30","10:00","10:30","11:00","11:30","12:00"]
     *
     * // Get time every 30 seconds from 9:00 to 9:03
     * DateUtils.range(30, 'seconds', '3/1, 9:00', '3/1, 9:03', 'H:mm:ss');// ["9:00:00","9:00:30","9:01:00","9:01:30","9:02:00","9:02:30","9:03:00","9:03:30","9:04:00","9:04:30","9:05:00"]
     *
     * @param  {number}                                                      step
     * @param  {'years'|'months'|'weeks'|'days'|'hours'|'minutes'|'seconds'} unit
     * @param  {string}                                                      start
     * @param  {string}                                                      end
     * @param  {string}                                                      format = 'YYYY-MM-DDTHH:mm:ssZ
     * @return {string[]}
     */
    static range(step: number, unit: 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds', start: string, end: string, format?: string): string[];
}
