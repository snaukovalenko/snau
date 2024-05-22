		function emailSend() {
			var userName = document.getElementById('name').value;
			var email = document.getElementById('mail').value;
			var message12 = document.getElementById('textQ').value;

			var messageBody = "ПІБ: " + userName +
				"<br/> Пошта: " + email +
				"<br/> Повідомлення: " + message12;

			Email.send({
				Host: "smtp.elasticemail.com",
				Username: "buusenko777@gmail.com",
				Password: "7F56AD4439306C57A9EDDDAD5F992FD9852B",
				To: "busenko777@gmail.com",
				From: "smtp.elasticemail.com",
				Subject: "Це тема листа",
				Body: messageBody
			}).then(
				function (message) {
					if (message === 'OK') {
						swal("Успішно", "Ви натиснули кнопку!", "success");
					} else {
						swal("Помилка", "Ви натиснули кнопку!", "error");
					}
				}
			);
		}
