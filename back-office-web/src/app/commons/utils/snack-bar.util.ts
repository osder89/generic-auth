import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
	providedIn: 'root'
})
export class SnackBarUtil {
	constructor(
		private snackBar: MatSnackBar
	) {}

	handleError(err: any) {
		console.log(err);

		this.snackBar.open(err?.error?.message || err?.message || err, 'Cerrar', {
			duration: 3000,
			panelClass: ['snackbar-error'],
		});
	}

	showSnackBarInfo(msg: string) {
		this.snackBar.open(msg, 'Cerrar', {
			duration: 3000,
			panelClass: ['snackbar-info'],
		});
	}

	showSnackBarWarning(msg: string) {
		this.snackBar.open(msg, 'Cerrar', {
			duration: 3000,
			panelClass: ['snackbar-warning'],
		});
	}

	showSnackBarSuccess(msg: string) {
		this.snackBar.open(msg, 'Cerrar', {
			duration: 3000,
			panelClass: ['snackbar-success'],
		});
	}
}

