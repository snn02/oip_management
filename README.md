# OIP Management

Репозиторий управленческих и методологических документов Отдела интернет-проектов (ОИП).  
Здесь собраны материалы по видению развития направления, стратегическим документам по функциональным блокам, а также база знаний по модели управления через цели, OKR и KPI.

## Что находится в репозитории

- стратегическое видение ОИП на 2025-2028 годы;
- документы по направлениям работы ОИП на 2026 год;
- приложения с расшифровкой метрик, KPI, KR и формул расчёта;
- база знаний по управленческой модели `Goals -> OKR -> KPI -> Motivation`;
- заготовленные каталоги под процессы и будущие стратегические блоки.

## Логика структуры

- `01_vision` содержит верхнеуровневое видение, миссию, векторы развития и стратегические инициативы;
- `02_strategy` содержит прикладные стратегии по направлениям ОИП и вспомогательные гайды по метрикам;
- `03_processes` зарезервирован под описание рабочих процессов и регламентов, сейчас пуст;
- `00_general_provisions` содержит общую методологическую базу знаний по управлению направлением.

## Основные документы

- [Видение развития ОИП на 2025-2028 гг.](./01_vision/oip_vision_2026-2028.md)
- [Модель управления Goals -> OKR -> KPI](./00_general_provisions/oip_management_model_goals_okr_kpi.md)
- [Проектное направление: стратегия](./02_strategy/02_projects/oip_project_strategy_2026.md)
- [Проектное направление: метрики](./02_strategy/02_projects/oip_project_metrics_guide.md)
- [Сопровождение: стратегия](./02_strategy/03_support/oip_support_strategy_2026.md)
- [Сопровождение: метрики](./02_strategy/03_support/oip_support_metrics_guide.md)
- [СМБ / Service Factory: стратегия](./02_strategy/04_smb/oip_smb_strategy_2026.md)
- [СМБ / Service Factory: метрики](./02_strategy/04_smb/oip_smb_metrics_guide.md)
- [Delivery / группа разработки: стратегия](./02_strategy/05_delivery/oip_delivery_strategy_2026.md)- 
- [Delivery / группа разработки: метрики](./02_strategy/05_delivery/oip_delivery_metrics_guide.md)

## Дерево проекта

```text
oip_management/
|-- [01_vision/](./01_vision/)
|   `-- [oip_vision_2026-2028.md](./01_vision/oip_vision_2026-2028.md)
|-- [02_strategy/](./02_strategy/)
|   |-- [01_sales/](./02_strategy/01_sales/)                # пока пусто
|   |-- [02_projects/](./02_strategy/02_projects/)
|   |   |-- [oip_project_strategy_2026.md](./02_strategy/02_projects/oip_project_strategy_2026.md)
|   |   `-- [oip_project_metrics_guide.md](./02_strategy/02_projects/oip_project_metrics_guide.md)
|   |-- [03_support/](./02_strategy/03_support/)
|   |   |-- [oip_support_strategy_2026.md](./02_strategy/03_support/oip_support_strategy_2026.md)
|   |   `-- [oip_support_metrics_guide.md](./02_strategy/03_support/oip_support_metrics_guide.md)
|   |-- [04_smb/](./02_strategy/04_smb/)
|   |   |-- [oip_smb_strategy_2026.md](./02_strategy/04_smb/oip_smb_strategy_2026.md)
|   |   `-- [oip_smb_metrics_guide.md](./02_strategy/04_smb/oip_smb_metrics_guide.md)
|   |-- [05_delivery/](./02_strategy/05_delivery/)
|   |   |-- [oip_delivery_strategy_2026.md](./02_strategy/05_delivery/oip_delivery_strategy_2026.md)
|   |   `-- [oip_delivery_metrics_guide.md](./02_strategy/05_delivery/oip_delivery_metrics_guide.md)
|   |-- [06_marketing/](./02_strategy/06_marketing/)        # пока пусто
|   |-- [07_hr/](./02_strategy/07_hr/)                      # пока пусто
|   `-- [08_finances/](./02_strategy/08_finances/)          # пока пусто
|-- [03_processes/](./03_processes/)                        # пока пусто
|-- [00_general_provisions/](./00_general_provisions/)
|   `-- [oip_management_model_goals_okr_kpi.md](./00_general_provisions/oip_management_model_goals_okr_kpi.md)
`-- [README.md](./README.md)
```

## Краткое описание разделов

### `01_vision`

Раздел задаёт общую рамку развития ОИП: миссию, внешние факторы, ключевые компетенции, векторы роста до 2028 года, целевые результаты и стратегические инициативы.

### `02_strategy`

Основной рабочий раздел репозитория. В нём для каждого направления фиксируются:

- стратегическая роль направления;
- цели и целевое состояние;
- OKR на 2026 год;
- KPI операционной эффективности;
- метрики, методики расчёта, отчётность.

На текущий момент наполнены направления:

- `02_projects` — проектное направление;
- `03_support` — сопровождение;
- `04_smb` — СМБ / Service Factory;
- `05_delivery` — delivery / группа разработки (метрический гайд присутствует).

Папки `01_sales`, `06_marketing`, `07_hr`, `08_finances` созданы как заготовки под последующее наполнение.

### `03_processes`

Каталог под процессы, регламенты, схемы взаимодействия и операционные инструкции. На момент анализа файлов ещё не заполнен.

### `00_general_provisions`

Общая база знаний по модели управления направлением: как связаны стратегические цели, OKR, KPI и мотивация руководителей.

## Замечания по текущему состоянию

- Стратегии и метрики оформлены в Markdown и готовы для чтения прямо из Git-репозитория.
