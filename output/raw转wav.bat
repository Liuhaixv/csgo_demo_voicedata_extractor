@ECHO
:main

set output_name = %~n1".wav"
"C:\Program Files (x86)\sox-14-4-2\sox.exe" -t raw -r 22050 -e signed -b 16 -c 1 -L %1 %output_name %
if "%1"!="" (
	shift /1
	goto :main
)