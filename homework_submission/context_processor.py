from django.conf import settings as original_settings

from submission_system.models import Courser


def coursers(request):
    cs_coursers = Courser.objects.filter(part__name="软件研发中心")
    ee_coursers = Courser.objects.filter(part__name="电子部")
    mm_coursers = Courser.objects.filter(part__name="多媒体部")
    return {"cs_coursers": cs_coursers, "ee_coursers": ee_coursers, "mm_coursers": mm_coursers}
